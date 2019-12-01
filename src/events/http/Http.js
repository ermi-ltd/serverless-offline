import HttpEventDefinition from './HttpEventDefinition.js'
import HttpServer from './HttpServer.js'

export default class Http {
  constructor(serverless, options, lambda) {
    this._httpServer = new HttpServer(serverless, options, lambda)
  }

  start() {
    return this._httpServer.start()
  }

  // stops the server
  stop(timeout) {
    return this._httpServer.stop(timeout)
  }

  createEvent(functionKey, rawHttpEventDefinition, handler) {
    const httpEvent = new HttpEventDefinition(rawHttpEventDefinition)

    this._httpServer.createRoutes(functionKey, httpEvent, handler)
  }

  createResourceRoutes() {
    this._httpServer.createResourceRoutes()
  }

  create404Route() {
    this._httpServer.create404Route()
  }

  registerPlugins() {
    return this._httpServer.registerPlugins()
  }

  // TEMP FIXME quick fix to expose gateway server for testing, look for better solution
  getServer() {
    return this._httpServer.getServer()
  }
}
