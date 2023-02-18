import type { UserUpdateDto } from '@/types'

import { CognitoIdentityServiceProvider } from 'aws-sdk'
import type { AttributeListType } from 'aws-sdk/clients/cognitoidentityserviceprovider'

type PropertiesCognito =
  | 'email_verified'
  | 'phone_number'
  | 'updated_at'
  | 'name'
  | 'email'
  | 'family_name'

class CognitoService {
  private cognitoProvider: CognitoIdentityServiceProvider

  constructor() {
    this.cognitoProvider = new CognitoIdentityServiceProvider()
  }

  async update(username: string, newUser: UserUpdateDto): Promise<boolean> {
    const fields = {
      phone_number: 'phone',
      email: 'email'
    } as Record<PropertiesCognito, keyof UserUpdateDto>

    const userAttributes = this.mapData(newUser, fields)

    if (newUser.email) {
      userAttributes.push({
        Name: 'email_verified',
        Value: 'true'
      })
    }

    const paramsUpdate = {
      UserPoolId: process.env.USER_POOL_ID,
      Username: username,
      UserAttributes: userAttributes
    } as CognitoIdentityServiceProvider.Types.AdminUpdateUserAttributesRequest

    await this.cognitoProvider.adminUpdateUserAttributes(paramsUpdate).promise()
    return true
  }

  private mapData(
    data: unknown,
    fields: Record<string, string>
  ): AttributeListType {
    const attributeList: AttributeListType = []

    for (const [propertyCognito, propertyData] of Object.entries(fields)) {
      if (!data[propertyData]) {
        continue
      }

      attributeList.push({
        Name: propertyCognito,
        Value: data[propertyData]
      })
    }

    return attributeList
  }
}

export const cognitoService = new CognitoService()
