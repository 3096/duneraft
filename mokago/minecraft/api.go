package minecraft

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type UUIDResponse struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

func formatUUID(uuid string) string {
	if len(uuid) != 32 {
		return uuid // or handle error
	}
	return fmt.Sprintf("%s-%s-%s-%s-%s",
		uuid[0:8],
		uuid[8:12],
		uuid[12:16],
		uuid[16:20],
		uuid[20:32],
	)
}

func GetUUID(username string) (UUIDResponse, error) {
	url := fmt.Sprintf("https://dualie.ink/drasl/users/profiles/minecraft/%s", username)
	resp, err := http.Get(url)
	if err != nil {
		return UUIDResponse{}, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		url = fmt.Sprintf("https://api.minecraftservices.com/minecraft/profile/lookup/name/%s", username)
		mojangResp, err := http.Get(url)
		if err != nil {
			return UUIDResponse{}, err
		}
		defer mojangResp.Body.Close()
		if mojangResp.StatusCode != http.StatusOK {
			return UUIDResponse{}, fmt.Errorf("failed to get UUID from drasl: %s , and mojang: %s", resp.Status, mojangResp.Status)
		}
		resp = mojangResp
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return UUIDResponse{}, err
	}

	var uuidResp UUIDResponse
	err = json.Unmarshal(body, &uuidResp)
	if err != nil {
		return UUIDResponse{}, err
	}

	uuidResp.ID = formatUUID(uuidResp.ID)
	return uuidResp, nil
}
