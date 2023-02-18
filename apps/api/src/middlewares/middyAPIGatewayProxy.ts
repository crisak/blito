import middy from '@middy/core'
import httpCors from '@middy/http-cors'
import httpJsonBodyParser from '@middy/http-json-body-parser'

const middyAPIGatewayProxy = () => {
  return middy().use(httpJsonBodyParser()).use(httpCors())
}

export default middyAPIGatewayProxy
