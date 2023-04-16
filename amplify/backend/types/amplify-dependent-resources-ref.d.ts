export type AmplifyDependentResourcesAttributes = {
  "api": {
    "Blito": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "Blito": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "CreatedSNSRole": "string",
      "GoogleWebClient": "string",
      "HostedUIDomain": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "OAuthMetadata": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "AdminGroupRole": "string",
      "SuperAdminGroupRole": "string"
    }
  },
  "function": {
    "BlitoPostConfirmation": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "s3blitostoragef45ca4aa": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}