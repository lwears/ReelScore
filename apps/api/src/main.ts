import { serverConfig } from '@api/configs/env.config'
import { createServer } from '@api/server/server'

const server = createServer(serverConfig)

server.start()
