package storageproviders

import (
	"time"

	log "github.com/sirupsen/logrus"

	"github.com/p2x3yz/owncast/config"
	"github.com/p2x3yz/owncast/core/transcoder"
)

// LocalStorage represents an instance of the local storage provider for HLS video.
type LocalStorage struct {
	// Cleanup old public HLS content every N min from the webroot.
	onlineCleanupTicker *time.Ticker
}

// NewLocalStorage returns a new LocalStorage instance.
func NewLocalStorage() *LocalStorage {
	return &LocalStorage{}
}

// Setup configures this storage provider.
func (s *LocalStorage) Setup() error {
	// NOTE: This cleanup timer will have to be disabled to support recordings in the future
	// as all HLS segments have to be publicly available on disk to keep a recording of them.
	s.onlineCleanupTicker = time.NewTicker(1 * time.Minute)
	go func() {
		for range s.onlineCleanupTicker.C {
			transcoder.CleanupOldContent(config.HLSStoragePath)
		}
	}()
	return nil
}

// SegmentWritten is called when a single segment of video is written.
func (s *LocalStorage) SegmentWritten(localFilePath string) {
	if _, err := s.Save(localFilePath, 0); err != nil {
		log.Warnln(err)
	}
}

// VariantPlaylistWritten is called when a variant hls playlist is written.
func (s *LocalStorage) VariantPlaylistWritten(localFilePath string) {
	if _, err := s.Save(localFilePath, 0); err != nil {
		log.Errorln(err)
		return
	}
}

// MasterPlaylistWritten is called when the master hls playlist is written.
func (s *LocalStorage) MasterPlaylistWritten(localFilePath string) {
	if _, err := s.Save(localFilePath, 0); err != nil {
		log.Warnln(err)
	}
}

// Save will save a local filepath using the storage provider.
func (s *LocalStorage) Save(filePath string, retryCount int) (string, error) {
	return filePath, nil
}
