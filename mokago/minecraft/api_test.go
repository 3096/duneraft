package minecraft

import (
	"fmt"
	"testing"
)

func TestGetUUID(t *testing.T) {
	username := "dualie" // Replace with the desired username
	uuidResponse, err := GetUUID(username)
	if err != nil {
		t.Fatalf("Error looking up UUID: %v", err)
	}
	if uuidResponse.ID == "" {
		t.Errorf("Expected a non-empty UUID for username %s, got empty string", username)
	}
	if uuidResponse.ID != "dfea555e-dd6f-4236-ac30-c551e10cf656" {
		t.Errorf("Expected UUID dfea555e-dd6f-4236-ac30-c551e10cf656, got %s", uuidResponse.ID)
	}
	fmt.Printf("UUID for username %s: %s\n", username, uuidResponse.ID)

	// Test with an invalid username
	invalidUsername := "cccsoundsnuaounsunjliyiylyilylilyilyilyllyoonsuo"
	_, err = GetUUID(invalidUsername)
	if err == nil {
		t.Errorf("Expected an error for invalid username %s, got nil", invalidUsername)
	} else {
		fmt.Printf("Error for invalid username %s: %v\n", invalidUsername, err)
	}
}
