package rcon

import (
	"github.com/gorcon/rcon"
)

// RCONClient is a struct that holds the RCON client connection.
type RCONClient struct {
	Conn *rcon.Conn
}

// NewRCONClient creates a new RCON client and connects to the server.
func NewRCONClient(addr, password string) (*RCONClient, error) {
	client, err := rcon.Dial(addr, password)
	if err != nil {
		return nil, err
	}
	return &RCONClient{Conn: client}, nil
}

// ExecuteCommand executes a command on the RCON server and returns the response.
func (c *RCONClient) ExecuteCommand(command string) (string, error) {
	response, err := c.Conn.Execute(command)
	if err != nil {
		return "", err
	}
	return response, nil
}

// Close closes the RCON client connection.
func (c *RCONClient) Close() {
	if c.Conn != nil {
		c.Conn.Close()
	}
}
