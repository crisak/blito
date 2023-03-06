/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S3BLITOSTORAGEF45CA4AA_BUCKETNAME
Amplify Params - DO NOT EDIT */
import AnalyticsService from './analytics.service'

class InvalidInputDataCristian extends Error {
  constructor(message, detail) {
    super(message)
    this.detail = JSON.stringify(detail || '')
  }
}

const errorTestInvocation = () => {
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
}

function convertToCSV(arr, header) {
  const csv = arr.map((row) => {
    return Object.values(row)
      .map((value) => {
        if (typeof value === 'string' && value.includes(',')) {
          return `"${value}"`
        } else {
          return value
        }
      })
      .join(',')
  })
  csv.unshift(header.join(',')) // Agrega las cabeceras
  return csv.join('\n')
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)

  const analyticsService = new AnalyticsService()

  errorTestInvocation()

  const data = await analyticsService.getAll()

  const dataFilter = data.map(({ page = '', total = 0, mobile, desktop }) => ({
    page,
    total,
    mobile: mobile?.total || 0,
    desktop: desktop?.total || 0
  }))

  const csv = convertToCSV(dataFilter, ['Page', 'Total', 'Mobile', 'Desktop'])

  // STORAGE_S3BLITOSTORAGEF45CA4AA_BUCKETNAME

  return {
    url: csv,
    status: true
  }
}
