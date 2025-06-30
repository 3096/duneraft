package minecraft

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"

	"dualie.ink/duneraft/mokago/config"
	"dualie.ink/duneraft/mokago/rcon"
)

type WhitelistEntry struct {
	UUID string `json:"uuid"`
	Name string `json:"name"`
}

func AddWhitelist(uuidResponse UUIDResponse) error {
	// Create RCON client
	rconClient, err := rcon.NewRCONClient(config.RCON_ADDR, config.RCON_PASSWORD)
	if err != nil {
		return fmt.Errorf("failed to create RCON client: %w", err)
	}
	defer rconClient.Close()

	whitelistPath := filepath.Join(config.DATA_DIR, "whitelist.json") // adjust path as needed

	// Read existing whitelist
	var whitelist []WhitelistEntry
	file, err := os.ReadFile(whitelistPath)
	if err == nil {
		_ = json.Unmarshal(file, &whitelist)
	}

	exists := false
	for i, entry := range whitelist {
		if entry.UUID == uuidResponse.ID {
			// Already exists
			whitelist[i].Name = uuidResponse.Name // Update name if needed
			exists = true
			break
		}
	}
	if !exists {
		// Add new entry
		entry := WhitelistEntry{
			UUID: uuidResponse.ID,
			Name: uuidResponse.Name,
		}
		whitelist = append(whitelist, entry)
	}

	// Write back to file
	data, err := json.MarshalIndent(whitelist, "", "  ")
	if err != nil {
		return err
	}
	err = os.WriteFile(whitelistPath, data, 0644)
	if err != nil {
		return err
	}

	// Send command to RCON server
	command := "whitelist reload"
	response, err := rconClient.ExecuteCommand(command)
	if err != nil {
		return err
	}
	if response != "Reloaded the whitelist" {
		return fmt.Errorf("failed to reload whitelist: %s", response)
	}
	return nil
}

// func RemoveWhitelist(rconClient *rcon.RCONClient, uuidResponse UUIDResponse) error {
// 	whitelistPath := filepath.Join(config.DATA_DIR, "whitelist.json") // adjust path as needed

// 	// Read existing whitelist
// 	var whitelist []WhitelistEntry
// 	file, err := os.ReadFile(whitelistPath)
// 	if err == nil {
// 		_ = json.Unmarshal(file, &whitelist)
// 	}

// 	// Remove entry
// 	for i, entry := range whitelist {
// 		if entry.UUID == uuidResponse.ID {
// 			whitelist = append(whitelist[:i], whitelist[i+1:]...)
// 			break
// 		}
// 	}

// 	// Write back to file
// 	data, err := json.MarshalIndent(whitelist, "", "  ")
// 	if err != nil {
// 		return err
// 	}
// 	err = os.WriteFile(whitelistPath, data, 0644)
// 	if err != nil {
// 		return err
// 	}

// 	// Send command to RCON server
// 	command := "whitelist reload"
// 	response, err := rconClient.ExecuteCommand(command)
// 	if err != nil {
// 		return err
// 	}
// 	if response != "Whitelist reloaded." {
// 		return fmt.Errorf("failed to reload whitelist: %s", response)
// 	}
// 	return nil
// }
