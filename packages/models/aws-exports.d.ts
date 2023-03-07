declare const awsconfig: {
  aws_project_region: string;
  aws_appsync_graphqlEndpoint: string;
  aws_appsync_region: string;
  aws_appsync_authenticationType: string;
  aws_appsync_apiKey: string;
  aws_cognito_identity_pool_id: string;
  aws_cognito_region: string;
  aws_user_pools_id: string;
  aws_user_pools_web_client_id: string;
  oauth: AwsExportsOauth;
  aws_cognito_username_attributes: any[];
  aws_cognito_social_providers: any[];
  aws_cognito_signup_attributes: string[];
  aws_cognito_mfa_configuration: string;
  aws_cognito_mfa_types: any[];
  aws_cognito_password_protection_settings: AwsCognitoPasswordProtectionSettings;
  aws_cognito_verification_mechanisms: string[];
  aws_user_files_s3_bucket: string;
  aws_user_files_s3_bucket_region: string;
  geo: AwsExportsGeo;
};

interface AwsCognitoPasswordProtectionSettings {
  passwordPolicyMinLength: number;
  passwordPolicyCharacters: any[];
}

interface AwsExportsGeo {
  amazon_location_service: AmazonLocationService;
}

interface AmazonLocationService {
  region: string;
  maps: AmazonLocationServiceMaps;
}

interface AmazonLocationServiceMaps {
  items: any;
  default: string;
}

interface AwsExportsOauth {
  domain: string;
}

export default awsconfig;
