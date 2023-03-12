/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S3BLITOSTORAGEF45CA4AA_BUCKETNAME
Amplify Params - DO NOT EDIT */
// @ts-check
const I18n = require('./i18n')

const i18n = I18n.getInstance()

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

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)

  errorTestInvocation()

  // STORAGE_S3BLITOSTORAGEF45CA4AA_BUCKETNAME

  // default language is "en" (English)
  console.log(i18n.t('welcome', { params: { name: 'Cristian' } }))
  console.log(i18n.t('accept'))

  console.log('----------------------------')
  // set language
  console.log(i18n.t('welcome', { locale: 'es', params: { name: 'Cristian' } }))
  console.log(i18n.t('accept', { locale: 'es' }))

  return {
    url: i18n.t('welcome', { locale: 'es', params: { name: 'Cristian' } }),
    status: true
  }
}
