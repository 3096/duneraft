package commands

import (
	"slices"

	"dualie.ink/duneraft/mokago/config"
	"dualie.ink/duneraft/mokago/discord/utils"
	"dualie.ink/duneraft/mokago/minecraft"
	"dualie.ink/duneraft/mokago/rcon"
	"github.com/bwmarrin/discordgo"
)

var WhitelistCommand = discordgo.ApplicationCommand{
	Name:        "whitelist",
	Description: "Join the minecraft server whitelist",
	Options: []*discordgo.ApplicationCommandOption{
		{
			Name:        "id",
			Description: "Your Minecraft username",
			Type:        discordgo.ApplicationCommandOptionString,
			Required:    true,
		},
	},
}
var WhitelistCommandHandler = func(session *discordgo.Session, interactionCreate *discordgo.InteractionCreate, rcon *rcon.RCONClient) {
	member := interactionCreate.Member

	hasSusRole := slices.Contains(member.Roles, config.MOKAGO_SUS_ROLE_ID)
	if hasSusRole {
		session.InteractionRespond(interactionCreate.Interaction, &discordgo.InteractionResponse{
			Type: discordgo.InteractionResponseChannelMessageWithSource,
			Data: &discordgo.InteractionResponseData{
				Content: "你被我们发现了可疑行为，请解释一下，不然不能一起玩了哦！sussy baka",
			},
		})
		return
	}

	hasRole := slices.Contains(member.Roles, config.MOKAGO_WHITELIST_ROLE_ID)
	if hasRole {
		session.InteractionRespond(interactionCreate.Interaction, &discordgo.InteractionResponse{
			Type: discordgo.InteractionResponseChannelMessageWithSource,
			Data: &discordgo.InteractionResponseData{
				Content: "已经在白名单里，不用再加啦！Already whitelisted~",
			},
		})
		return
	}

	// Get the options from the interaction
	options := interactionCreate.ApplicationCommandData().Options
	// Map the options to a map for easier access
	optionMap := utils.MapOptions(options)
	// Get the id option
	idOption := optionMap["id"]
	// Get the value of the id option
	id := idOption.StringValue()
	uuidResponse, err := minecraft.GetUUID(id)
	if err != nil {
		session.InteractionRespond(interactionCreate.Interaction, &discordgo.InteractionResponse{
			Type: discordgo.InteractionResponseChannelMessageWithSource,
			Data: &discordgo.InteractionResponseData{
				Content: "找不到这个ID呢... please check your Minecraft username~\n" + err.Error(),
			},
		})
		return
	}

	// Add the user to the whitelist
	err = minecraft.AddWhitelist(rcon, uuidResponse)
	if err != nil {
		session.InteractionRespond(interactionCreate.Interaction, &discordgo.InteractionResponse{
			Type: discordgo.InteractionResponseChannelMessageWithSource,
			Data: &discordgo.InteractionResponseData{
				Content: "加白名单的时候出错了呢... something went wrong！\n" + err.Error(),
			},
		})
		return
	}
	// Add the user to the whitelist role
	err = session.GuildMemberRoleAdd(interactionCreate.GuildID, interactionCreate.Member.User.ID, config.MOKAGO_WHITELIST_ROLE_ID)
	if err != nil {
		session.InteractionRespond(interactionCreate.Interaction, &discordgo.InteractionResponse{
			Type: discordgo.InteractionResponseChannelMessageWithSource,
			Data: &discordgo.InteractionResponseData{
				Content: "白名单加好了，但是加群身份组失败了... please ask admin for help orzzzzz\n" + err.Error(),
			},
		})
		return
	}
	// Respond to the interaction
	session.InteractionRespond(interactionCreate.Interaction, &discordgo.InteractionResponse{
		Type: discordgo.InteractionResponseChannelMessageWithSource,
		Data: &discordgo.InteractionResponseData{
			Content: "恭喜你已经加入白名单啦！Welcome to the whitelist~",
		},
	})
}
