package main

import (
	"log"
	"os"

	"dualie.ink/duneraft/mokago/config"
	"dualie.ink/duneraft/mokago/discord"
)

func main() {
	config.LoadConfig()

	log.Println("rcon server address:", config.RCON_ADDR)

	// Pass a function to discord.RunClient that creates a new RCON client as needed
	err := discord.RunClient()
	if err != nil {
		log.Fatalf("Failed to start Discord client: %v", err)
	}
	log.Println("Discord client started successfully")

	// Wait for a signal to exit
	<-make(chan struct{})
	log.Println("Exiting...")
	os.Exit(0)
}
