import ApiEventHandler from './ApiEventHandler'

/**
 * Select Elements API event handler
 */
class LoadModelEventHandler extends ApiEventHandler {
  apiConnection = null
  navigation = null
  name = 'ai.bldrs-share.LoadModel'

  /**
   * constructor
   *
   * @param {object} apiConnection AbstractApiConnection
   * @param {object} navigation NavigationFunction
   */
  constructor(apiConnection, navigation) {
    super()
    this.apiConnection = apiConnection
    this.navigation = navigation
  }

  /**
   * The handler for this event
   *
   * @param {object} data the event associated data
   * @return {object} the response of the API call
   */
  handler(data) {
    if (!('githubIfcPath' in data) && !('srcPath' in data)) {
      return this.apiConnection.missingArgumentResponse('githubIfcPath or srcPath')
    }
    if ('githubIfcPath' in data) {
      this.navigation(`/share/v/gh/${data.githubIfcPath}`)
    } else if('srcPath' in data) {
      this.navigation(`/share/v/src/${data.srcPath}`)
    }

    return this.apiConnection.successfulResponse({})
  }
}

export default LoadModelEventHandler
