package discord

import (
	"dualie.ink/duneraft/mokago/config"
	"dualie.ink/duneraft/mokago/discord/commands"
	"github.com/bwmarrin/discordgo"
)

func interactionHandler(session *discordgo.Session, interactionCreate *discordgo.InteractionCreate) {
	if interactionCreate.Type == discordgo.InteractionApplicationCommand {
		command := interactionCreate.ApplicationCommandData().Name
		switch command {
		case "whitelist":
			commands.WhitelistCommandHandler(session, interactionCreate)
		default:
			session.InteractionRespond(interactionCreate.Interaction, &discordgo.InteractionResponse{
				Type: discordgo.InteractionResponseChannelMessageWithSource,
				Data: &discordgo.InteractionResponseData{
					Content: "Unknown command",
				},
			})
		}
	}
}

func RunClient() error {
	session, err := discordgo.New("Bot " + config.MOKAGO_TOKEN)
	if err != nil {
		return err
	}

	session.Identify.Intents = discordgo.IntentsAll

	session.AddHandler(func(s *discordgo.Session, i *discordgo.InteractionCreate) {
		interactionHandler(s, i)
	})
	// session.AddHandler(func(s *discordgo.Session, r *discordgo.Ready) {
	// 	s.UpdateGameStatus(0, "Check #announcements")
	// })

	_, err = session.ApplicationCommandBulkOverwrite(config.MOKAGO_APPLICATION_ID, config.MOKAGO_GUILD_ID, commands.Commands)
	if err != nil {
		return err
	}

	err = session.Open()
	if err != nil {
		return err
	}
	defer session.Close()
	return nil
}
