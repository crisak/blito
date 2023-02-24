import { middyAPIGatewayProxy } from '@/middlewares'
import router from './router'

export const main = middyAPIGatewayProxy().handler(router)
