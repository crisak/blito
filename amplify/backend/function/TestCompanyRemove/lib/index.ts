/* eslint-disable no-console */
import { Singleton } from './utils'
import { getContent, Tag, TypeSocialNetwork } from 'models'
import { APIGatewayEvent, Context } from 'aws-lambda'

const todos = []

console.log('🏁 Start lambda', {
  'global.miRequestId': global?.miRequestId || '',
  todos
})

type InputExample = { name: string; newInstance: boolean }

const sleep = (time = 15000) =>
  new Promise((resolve) => setTimeout(resolve, time))

export const handler = async (event: APIGatewayEvent, context: Context) => {
  console.log('0️⃣ global.miRequestId->', global.miRequestId)
  const body = JSON.parse(event.body) as InputExample

  global.miRequestId = context.awsRequestId

  const memoryObject = Singleton.getInstance({
    newInstance: Boolean(body.newInstance)
  })

  console.log('1️⃣ Start function:', {
    'global.miRequestId': global?.miRequestId || '',
    todos: JSON.parse(JSON.stringify(todos)),
    users: JSON.parse(JSON.stringify(memoryObject.getUsers()))
  })

  memoryObject.setUsers(body?.name || 'random')
  todos.push(body?.name || 'random')

  console.log('⏰ waiting .............')
  await sleep()

  console.log('2️⃣ After of sleep function:', {
    'global.miRequestId': global?.miRequestId || '',
    todos: JSON.parse(JSON.stringify(todos)),
    users: JSON.parse(JSON.stringify(memoryObject.getUsers()))
  })

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    },
    body: JSON.stringify({
      users: memoryObject.getUsers(),
      todos,
      cloudWatchId: global?.miRequestId || '',
      /** Test with library of Models  */
      queryGrahql: getContent,
      typeSocial: {
        facebook: TypeSocialNetwork.FACEBOOK,
        ins: TypeSocialNetwork.INSTAGRAM,
        you: TypeSocialNetwork.YOUTUBE
      },
      tag: {
        id: 'Test',
        name: 'Example'
      } as Pick<Tag, 'id' | 'name'>
    })
  }
}
