import { Singleton } from './utils'
import type { Tag } from 'models'

type InputExample = { name: string; newInstance: boolean }

exports.handler = async (event: InputExample) => {
  const memoryObject = Singleton.getInstance({
    newInstance: Boolean(event.newInstance)
  })

  memoryObject.setUsers(event?.name || 'random')

  return {
    statusCode: 200,

    body: memoryObject.getUsers(),
    tags: {
      id: 'Test',
      name: 'Example'
    } as Pick<Tag, 'id' | 'name'>
  }
}
