import { serverConfig } from '@api/configs/server.config'
import { createServer } from '@api/server/server'

const server = createServer(serverConfig)

server.start()
