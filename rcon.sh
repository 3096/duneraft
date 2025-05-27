#!/bin/bash
source .env
docker exec -it duneraft-rcon /rcon-cli --host mc --port $RCON_PORT --password $RCON_PASSWORD
