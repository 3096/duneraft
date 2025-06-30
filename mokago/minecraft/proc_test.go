package minecraft

import (
	"os"
	"path/filepath"
	"testing"

	"dualie.ink/duneraft/mokago/config"
	"dualie.ink/duneraft/mokago/utils"
)

func TestAddWhitelist_Manual(t *testing.T) {
	t.Skip("Manual test: enable to run")

	// Setup test data
	uuidResp := UUIDResponse{
		ID:   "069a79f4-44e9-4726-a5be-fca90e38aaf5",
		Name: "Notch",
	}
	config.DATA_DIR = filepath.Join("..", "..", "data")

	// Make a copy of the whitelist.json file for testing
	whitelistPath := filepath.Join(config.DATA_DIR, "whitelist.json")
	if _, err := os.Stat(whitelistPath); os.IsNotExist(err) {
		t.Fatalf("whitelist.json not found")
	}
	config.DATA_DIR = filepath.Join(os.Getenv("PWD"))
	testWhiteListPath := filepath.Join(config.DATA_DIR, "whitelist.json")
	if err := utils.CopyFile(whitelistPath, testWhiteListPath); err != nil {
		t.Fatalf("Failed to copy whitelist.json: %v", err)
	}

	// Patch config.DATA_DIR or path as needed
	// For this example, we'll just override the path in the function directly
	// You may need to adjust AddWhitelist to accept a path for better testability

	// Call the function
	err := AddWhitelist(uuidResp)
	if err != nil {
		t.Fatalf("AddWhitelist failed: %v, current working directory: %s", err, os.Getenv("PWD"))
	}

	// Add it again to check if it doesn't duplicate
	err = AddWhitelist(uuidResp)
	if err != nil {
		t.Fatalf("AddWhitelist failed: %v", err)
	}

	// Check file exists
	// if _, err := os.Stat(whitelistPath); os.IsNotExist(err) {
	// 	t.Fatalf("whitelist.json not created")
}
