package events

import "github.com/p2x3yz/owncast/core/user"

// ConnectedClientInfo represents the information about a connected client.
type ConnectedClientInfo struct {
	Event
	User *user.User `json:"user"`
}
