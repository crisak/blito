const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)

  const id = 'idRandom' // Se asume que se pasa el id como parámetro en el evento

  const params = {
    TableName: 'nombre-de-tu-tabla',
    Key: {
      id: id
    }
  }

  try {
    const data = await docClient.get(params).promise()
    const item = data.Item

    return {
      statusCode: 200,

      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify(item)
    }
  } catch (err) {
    console.log(err)
    return err
  }
}
