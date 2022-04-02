package activitypub

import (
	"github.com/p2x3yz/owncast/activitypub/crypto"
	"github.com/p2x3yz/owncast/activitypub/inbox"
	"github.com/p2x3yz/owncast/activitypub/outbox"
	"github.com/p2x3yz/owncast/activitypub/persistence"
	"github.com/p2x3yz/owncast/activitypub/workerpool"

	"github.com/p2x3yz/owncast/core/data"
	"github.com/p2x3yz/owncast/models"
	log "github.com/sirupsen/logrus"
)

// Start will initialize and start the federation support.
func Start(datastore *data.Datastore) {
	persistence.Setup(datastore)
	workerpool.InitOutboundWorkerPool()
	inbox.InitInboxWorkerPool()
	StartRouter()

	// Generate the keys for signing federated activity if needed.
	if data.GetPrivateKey() == "" {
		privateKey, publicKey, err := crypto.GenerateKeys()
		_ = data.SetPrivateKey(string(privateKey))
		_ = data.SetPublicKey(string(publicKey))
		if err != nil {
			log.Errorln("Unable to get private key", err)
		}
	}
}

// SendLive will send a "Go Live" message to followers.
func SendLive() error {
	return outbox.SendLive()
}

// SendPublicFederatedMessage will send an arbitrary provided message to followers.
func SendPublicFederatedMessage(message string) error {
	return outbox.SendPublicMessage(message)
}

// GetFollowerCount will return the local tracked follower count.
func GetFollowerCount() (int64, error) {
	return persistence.GetFollowerCount()
}

// GetPendingFollowRequests will return the pending follow requests.
func GetPendingFollowRequests() ([]models.Follower, error) {
	return persistence.GetPendingFollowRequests()
}
