package utils

import (
	"github.com/bwmarrin/discordgo"
)

type OptionMap = map[string]*discordgo.ApplicationCommandInteractionDataOption

func MapOptions(options []*discordgo.ApplicationCommandInteractionDataOption) OptionMap {
	m := make(OptionMap)
	for _, opt := range options {
		m[opt.Name] = opt
	}
	return m
}

func InteractionAuthor(i *discordgo.Interaction) *discordgo.User {
	if i.Member != nil {
		return i.Member.User
	}
	return i.User
}
