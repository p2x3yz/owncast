package core

import (
	"github.com/p2x3yz/owncast/core/data"
	"github.com/p2x3yz/owncast/core/storageproviders"
)

func setupStorage() error {
	s3Config := data.GetS3Config()

	if s3Config.Enabled {
		_storage = storageproviders.NewS3Storage()
	} else {
		_storage = storageproviders.NewLocalStorage()
	}

	if err := _storage.Setup(); err != nil {
		return err
	}

	handler.Storage = _storage

	return nil
}
