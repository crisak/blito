export * from './API'
export * from './graphql/mutations'
export * from './graphql/queries'
export * from './graphql/subscriptions'
import { default as awsExports } from './aws-exports'
import { default as awsExportsProd } from './aws-exports.prod'

export type AwsExports = typeof awsExports

export const getAwsExports = (env = 'dev') => {
  const isProduction = ['prod', 'production']
  const envFilter = env.toLowerCase()

  if (isProduction.includes(envFilter)) {
    return awsExportsProd
  }

  return awsExports
}
