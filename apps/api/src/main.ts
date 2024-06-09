import { createServer } from '@api/server/server'
import { serverConfig } from './configs/server.config'

const server = createServer(serverConfig)

server.start()
