/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)

  if (process.env.ERROR === 'exception') {
    throw new Error('Error internal server by Cristian')
  }

  if (process.env.ERROR === 'control') {
    return { errorCristian: 'fue un error custom' }
  }

  if (process.env.ERROR === 'apiError') {
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
