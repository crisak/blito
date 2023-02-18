import type { AWS } from '@serverless/typescript'

/**
 * serverless-iam-roles-per-function
 */
export interface ServerlessIamRolesPerFunctionTypes {
  iamRoleStatementsName: string
  iamRoleStatements: IamRoleStatement[]
}

export interface IamRoleStatement {
  Effect: string
  Action: string[]
  Resource: string
}

/** todo Type default + plugins */

export type AWSFunction<NameFunction extends string = string> = Partial<
  AWS['functions'][NameFunction]
> &
  Partial<ServerlessIamRolesPerFunctionTypes>
