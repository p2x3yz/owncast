package admin

import (
	"net/http"

	"github.com/p2x3yz/owncast/controllers"
	"github.com/p2x3yz/owncast/core"

	"github.com/p2x3yz/owncast/core/rtmp"
)

// DisconnectInboundConnection will force-disconnect an inbound stream.
func DisconnectInboundConnection(w http.ResponseWriter, r *http.Request) {
	if !core.GetStatus().Online {
		controllers.WriteSimpleResponse(w, false, "no inbound stream connected")
		return
	}

	rtmp.Disconnect()
	controllers.WriteSimpleResponse(w, true, "inbound stream disconnected")
}
