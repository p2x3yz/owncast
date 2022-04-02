package controllers

import (
	"net/http"

	"github.com/p2x3yz/owncast/core"
	"github.com/p2x3yz/owncast/models"
)

// Ping is fired by a client to show they are still an active viewer.
func Ping(w http.ResponseWriter, r *http.Request) {
	viewer := models.GenerateViewerFromRequest(r)
	core.SetViewerActive(&viewer)
}
