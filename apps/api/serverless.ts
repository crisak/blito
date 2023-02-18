import type { AWS } from '@serverless/typescript'

import * as functions from '@/functions'

const serverlessConfiguration: AWS = {
  service: 'blito-api',
  frameworkVersion: '3',
  useDotenv: true,
  plugins: [
    'serverless-dotenv-plugin',
    'serverless-iam-roles-per-function',
    'serverless-esbuild',
    'serverless-offline'
  ],
  provider: {
    profile: 'crisak',
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      QUEUE_URL: { Ref: 'QueueCalcUsers' }
    }
  },

  functions: functions as any,
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
      watch: {
        pattern: ['src/**/*.ts']
      }
    }
  },
  /** @doc https://www.serverless.com/framework/docs/providers/aws/events/sqs */
  resources: {
    Resources: {
      QueueCalcUsers: {
        Type: 'AWS::SQS::Queue',
        Properties: {
          QueueName: '${env:QUEUE_NAME_CALC}',
          ContentBasedDeduplication: true,
          DelaySeconds: 300, // 5 minutos maximo para reunir 10 mensajes para liberar el lote
          FifoQueue: true
        }
      },
      Tableshipping: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: '${self:service}-Tableshipping-${sls:stage}',
          AttributeDefinitions: [
            {
              AttributeName: 'serviceId',
              AttributeType: 'S'
            }
          ],
          KeySchema: [
            {
              AttributeName: 'serviceId',
              KeyType: 'S'
            }
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 2,
            WriteCapacityUnits: 2
          }
        }
      }
    }
  }
}

module.exports = serverlessConfiguration
/**
resources: # CloudFormation template syntax
  Resources:
    usersTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: usersTable
        AttributeDefinitions:
          - AttributeName: email
            AttributeType: S
        KeySchema:
          - AttributeName: email
            KeyType: HASH
        ProvisionedThroughput:
          ReadCapacityUnits: 1
          WriteCapacityUnits: 1
*/
