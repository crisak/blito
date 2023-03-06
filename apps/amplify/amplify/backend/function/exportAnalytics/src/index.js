class InvalidInputDataCristian extends Error {
  constructor(message, detail) {
    super(message)
    this.detail = JSON.stringify(detail || '')
  }
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)

  if (process.env.TYPE_ERROR === 'error') {
    throw new Error('Error internal server by Cristian')
  }

  if (process.env.TYPE_ERROR === 'throwCustom') {
    throw { errorCristian: 'fue un error custom' }
  }

  if (process.env.TYPE_ERROR === 'errorCustom') {
    throw new InvalidInputDataCristian('Error custom by Cristian', {
      name: 'my custom name'
    })
  }

  if (process.env.TYPE_ERROR === 'apiError') {
    return {
      statusCode: 400,
      body: JSON.stringify({
        data: 'Error data'
      }),
      //  Uncomment below to enable CORS requests
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      }
    }
  }

  return {
    url: 'http://localhost:3000',
    status: true
  }
}
