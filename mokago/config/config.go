package config

import "os"

var (
	RCON_ADDR                = os.Getenv("RCON_ADDR")
	RCON_PASSWORD            = os.Getenv("RCON_PASSWORD")
	MOKAGO_TOKEN             = os.Getenv("MOKAGO_TOKEN")
	MOKAGO_WHITELIST_ROLE_ID = os.Getenv("MOKAGO_WHITELIST_ROLE_ID")
	MOKAGO_SUS_ROLE_ID       = os.Getenv("MOKAGO_SUS_ROLE_ID")
	MOKAGO_GUILD_ID          = os.Getenv("MOKAGO_GUILD_ID")
	MOKAGO_APPLICATION_ID    = os.Getenv("MOKAGO_APPLICATION_ID")
	DATA_DIR                 = os.Getenv("DATA_DIR")
)
