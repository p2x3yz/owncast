package admin

import (
	"encoding/json"
	"net/http"

	"github.com/p2x3yz/owncast/core"
	"github.com/p2x3yz/owncast/core/data"
	"github.com/p2x3yz/owncast/metrics"
	"github.com/p2x3yz/owncast/models"
	"github.com/p2x3yz/owncast/router/middleware"
	log "github.com/sirupsen/logrus"
)

// Status gets the details of the inbound broadcaster.
func Status(w http.ResponseWriter, r *http.Request) {
	broadcaster := core.GetBroadcaster()
	status := core.GetStatus()
	currentBroadcast := core.GetCurrentBroadcast()
	health := metrics.GetStreamHealthOverview()
	response := adminStatusResponse{
		Broadcaster:            broadcaster,
		CurrentBroadcast:       currentBroadcast,
		Online:                 status.Online,
		Health:                 health,
		ViewerCount:            status.ViewerCount,
		OverallPeakViewerCount: status.OverallMaxViewerCount,
		SessionPeakViewerCount: status.SessionMaxViewerCount,
		VersionNumber:          status.VersionNumber,
		StreamTitle:            data.GetStreamTitle(),
	}

	w.Header().Set("Content-Type", "application/json")
	middleware.DisableCache(w)

	err := json.NewEncoder(w).Encode(response)
	if err != nil {
		log.Errorln(err)
	}
}

type adminStatusResponse struct {
	Broadcaster            *models.Broadcaster          `json:"broadcaster"`
	CurrentBroadcast       *models.CurrentBroadcast     `json:"currentBroadcast"`
	Online                 bool                         `json:"online"`
	ViewerCount            int                          `json:"viewerCount"`
	OverallPeakViewerCount int                          `json:"overallPeakViewerCount"`
	SessionPeakViewerCount int                          `json:"sessionPeakViewerCount"`
	StreamTitle            string                       `json:"streamTitle"`
	Health                 *models.StreamHealthOverview `json:"health"`
	VersionNumber          string                       `json:"versionNumber"`
}
