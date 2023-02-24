import { GatewayProxyEvent } from '@/types'
import { ResponseApi } from '@/utils'

class CreateController {
  constructor() {}

  async run(event: GatewayProxyEvent<any>) {
    return ResponseApi.success({ message: event })
  }
}

export const createController = new CreateController()
