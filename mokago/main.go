package main

import (
	"log"
	"os"

	"dualie.ink/duneraft/mokago/config"
	"dualie.ink/duneraft/mokago/discord"
	"dualie.ink/duneraft/mokago/rcon"
)

func main() {
	config.LoadConfig()

	log.Println("rcon server address:", config.RCON_ADDR)
	rconClient, err := rcon.NewRCONClient(config.RCON_ADDR, config.RCON_PASSWORD)
	if err != nil {
		log.Fatalf("Failed to connect to RCON server: %v", err)
	}
	defer rconClient.Close()

	// Start the Discord client
	err = discord.RunClient(rconClient)
	if err != nil {
		log.Fatalf("Failed to start Discord client: %v", err)
	}
	log.Println("Discord client started successfully")

	// Wait for a signal to exit
	<-make(chan struct{})
	log.Println("Exiting...")
	os.Exit(0)
}
