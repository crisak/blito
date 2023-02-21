import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler
} from 'aws-lambda'

export type GatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & {
  body: S
}
export type HandlerEventAPIGatewayProxy<S> = Handler<
  GatewayProxyEvent<S>,
  APIGatewayProxyResult
>
