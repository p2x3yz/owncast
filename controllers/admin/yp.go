package admin

import (
	"net/http"

	"github.com/p2x3yz/owncast/controllers"
	"github.com/p2x3yz/owncast/core/data"
	log "github.com/sirupsen/logrus"
)

// ResetYPRegistration will clear the YP protocol registration key.
func ResetYPRegistration(w http.ResponseWriter, r *http.Request) {
	log.Traceln("Resetting YP registration key")
	if err := data.SetDirectoryRegistrationKey(""); err != nil {
		log.Errorln(err)
		controllers.WriteSimpleResponse(w, false, err.Error())
		return
	}
	controllers.WriteSimpleResponse(w, true, "reset")
}
