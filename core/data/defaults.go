package data

import (
	"github.com/p2x3yz/owncast/config"
	"github.com/p2x3yz/owncast/models"
)

// HasPopulatedDefaults will determine if the defaults have been inserted into the database.
func HasPopulatedDefaults() bool {
	hasPopulated, err := _datastore.GetBool("HAS_POPULATED_DEFAULTS")
	if err != nil {
		return false
	}
	return hasPopulated
}

func hasPopulatedFederationDefaults() bool {
	hasPopulated, err := _datastore.GetBool("HAS_POPULATED_FEDERATION_DEFAULTS")
	if err != nil {
		return false
	}
	return hasPopulated
}

// PopulateDefaults will set default values in the database.
func PopulateDefaults() {
	defaults := config.GetDefaults()

	if HasPopulatedDefaults() {
		return
	}

	_ = SetStreamKey(defaults.StreamKey)
	_ = SetHTTPPortNumber(float64(defaults.WebServerPort))
	_ = SetRTMPPortNumber(float64(defaults.RTMPServerPort))
	_ = SetLogoPath(defaults.Logo)
	_ = SetServerMetadataTags([]string{"IGN", "streaming", "RAWK"})
	_ = SetServerSummary("Welcome to the Official Galaxy of Intergalactic Shenannigans")
	_ = SetServerWelcomeMessage("")
	_ = SetServerName("IGN")
	_ = SetStreamKey(defaults.StreamKey)
	_ = SetExtraPageBodyContent("This is your page's content that can be edited in the admin.")
	_ = SetFederationGoLiveMessage(defaults.FederationGoLiveMessage)
	_ = SetSocialHandles([]models.SocialHandle{
		{
			Platform: "github",
			URL:      "https://github.com/p2x3yz/owncast",
		},
	})

	_datastore.warmCache()
	_ = _datastore.SetBool("HAS_POPULATED_DEFAULTS", true)
}
