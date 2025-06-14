package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

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

func LoadConfig() error {
	err := godotenv.Load()
	if err != nil {
		return err
	}
	RCON_ADDR = os.Getenv("RCON_ADDR")
	if RCON_ADDR == "" {
		RCON_ADDR = fmt.Sprintf("localhost:%s", os.Getenv("RCON_PORT"))
	}
	RCON_PASSWORD = os.Getenv("RCON_PASSWORD")
	MOKAGO_TOKEN = os.Getenv("MOKAGO_TOKEN")
	MOKAGO_WHITELIST_ROLE_ID = os.Getenv("MOKAGO_WHITELIST_ROLE_ID")
	MOKAGO_SUS_ROLE_ID = os.Getenv("MOKAGO_SUS_ROLE_ID")
	MOKAGO_GUILD_ID = os.Getenv("MOKAGO_GUILD_ID")
	MOKAGO_APPLICATION_ID = os.Getenv("MOKAGO_APPLICATION_ID")
	DATA_DIR = os.Getenv("DATA_DIR")
	if DATA_DIR == "" {
		DATA_DIR = "./data"
	}

	fmt.Println("Configuration loaded:")
	fmt.Printf("RCON_ADDR: %s\n", RCON_ADDR)
	fmt.Printf("RCON_PASSWORD: %s\n", RCON_PASSWORD)
	fmt.Printf("MOKAGO_TOKEN: %s\n", MOKAGO_TOKEN)
	fmt.Printf("MOKAGO_WHITELIST_ROLE_ID: %s\n", MOKAGO_WHITELIST_ROLE_ID)
	fmt.Printf("MOKAGO_SUS_ROLE_ID: %s\n", MOKAGO_SUS_ROLE_ID)
	fmt.Printf("MOKAGO_GUILD_ID: %s\n", MOKAGO_GUILD_ID)
	fmt.Printf("MOKAGO_APPLICATION_ID: %s\n", MOKAGO_APPLICATION_ID)
	fmt.Printf("DATA_DIR: %s\n", DATA_DIR)

	return nil
}
