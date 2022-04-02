package core

import (
	"os"
	"path"
	"path/filepath"

	log "github.com/sirupsen/logrus"

	"github.com/p2x3yz/owncast/config"
	"github.com/p2x3yz/owncast/core/chat"
	"github.com/p2x3yz/owncast/core/data"
	"github.com/p2x3yz/owncast/core/rtmp"
	"github.com/p2x3yz/owncast/core/transcoder"
	"github.com/p2x3yz/owncast/core/user"
	"github.com/p2x3yz/owncast/core/webhooks"
	"github.com/p2x3yz/owncast/models"
	"github.com/p2x3yz/owncast/notifications"
	"github.com/p2x3yz/owncast/utils"
	"github.com/p2x3yz/owncast/yp"
)

var (
	_stats       *models.Stats
	_storage     models.StorageProvider
	_transcoder  *transcoder.Transcoder
	_yp          *yp.YP
	_broadcaster *models.Broadcaster
	handler      transcoder.HLSHandler
	fileWriter   = transcoder.FileWriterReceiverService{}
)

// Start starts up the core processing.
func Start() error {
	resetDirectories()

	data.PopulateDefaults()

	if err := data.VerifySettings(); err != nil {
		log.Error(err)
		return err
	}

	if err := setupStats(); err != nil {
		log.Error("failed to setup the stats")
		return err
	}

	// The HLS handler takes the written HLS playlists and segments
	// and makes storage decisions.  It's rather simple right now
	// but will play more useful when recordings come into play.
	handler = transcoder.HLSHandler{}

	if err := setupStorage(); err != nil {
		log.Errorln("storage error", err)
	}

	user.SetupUsers()

	fileWriter.SetupFileWriterReceiverService(&handler)

	if err := createInitialOfflineState(); err != nil {
		log.Error("failed to create the initial offline state")
		return err
	}

	_yp = yp.NewYP(GetStatus)

	if err := chat.Start(GetStatus); err != nil {
		log.Errorln(err)
	}

	// start the rtmp server
	go rtmp.Start(setStreamAsConnected, setBroadcaster)

	rtmpPort := data.GetRTMPPortNumber()
	log.Infof("RTMP is accepting inbound streams on port %d.", rtmpPort)

	webhooks.InitWorkerPool()

	notifications.Setup(data.GetStore())

	return nil
}

func createInitialOfflineState() error {
	transitionToOfflineVideoStreamContent()

	return nil
}

// transitionToOfflineVideoStreamContent will overwrite the current stream with the
// offline video stream state only.  No live stream HLS segments will continue to be
// referenced.
func transitionToOfflineVideoStreamContent() {
	log.Traceln("Firing transcoder with offline stream state")

	_transcoder := transcoder.NewTranscoder()
	_transcoder.SetIdentifier("offline")
	_transcoder.SetLatencyLevel(models.GetLatencyLevel(4))
	_transcoder.SetIsEvent(true)

	offlineFilePath, err := saveOfflineClipToDisk("offline.ts")
	if err != nil {
		log.Fatalln("unable to save offline clip:", err)
	}

	_transcoder.SetInput(offlineFilePath)
	go _transcoder.Start()

	// Copy the logo to be the thumbnail
	logo := data.GetLogoPath()
	if err = utils.Copy(filepath.Join("data", logo), "webroot/thumbnail.jpg"); err != nil {
		log.Warnln(err)
	}

	// Delete the preview Gif
	_ = os.Remove(path.Join(config.WebRoot, "preview.gif"))
}

func resetDirectories() {
	log.Trace("Resetting file directories to a clean slate.")

	// Wipe hls data directory
	utils.CleanupDirectory(config.HLSStoragePath)

	// Remove the previous thumbnail
	logo := data.GetLogoPath()
	if utils.DoesFileExists(logo) {
		err := utils.Copy(path.Join("data", logo), filepath.Join(config.WebRoot, "thumbnail.jpg"))
		if err != nil {
			log.Warnln(err)
		}
	}
}
