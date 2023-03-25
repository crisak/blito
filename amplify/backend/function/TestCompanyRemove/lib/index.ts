/* eslint-disable no-console */
import { Singleton } from './utils'
import type { Tag } from 'models'
import { Context } from 'aws-lambda'

const todos = []

console.log('🏁 Start lambda', {
  'global.miRequestId': global.miRequestId,
  todos
})

type InputExample = { name: string; newInstance: boolean }

const sleep = (time = 10000) =>
  new Promise((resolve) => setTimeout(resolve, time))

export const handler = async (event: InputExample, context: Context) => {
  global.miRequestId = context.awsRequestId
  console.log('1️⃣ Start function:', {
    'global.miRequestId': global.miRequestId,
    todos
  })

  const memoryObject = Singleton.getInstance({
    newInstance: Boolean(event.newInstance)
  })

  memoryObject.setUsers(event?.name || 'random')
  todos.push(event?.name || 'random')

  await sleep()

  console.log('2️⃣ Start function:', {
    'global.miRequestId': global.miRequestId,
    todos
  })

  return {
    statusCode: 200,

    body: memoryObject.getUsers(),
    tags: {
      id: 'Test',
      name: 'Example'
    } as Pick<Tag, 'id' | 'name'>
  }
}
