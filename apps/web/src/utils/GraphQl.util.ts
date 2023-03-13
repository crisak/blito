import { DefaultPropsGraphQL } from '@/models/ModelsAdapter.model'

export default class GraphQLUtil {
  static removeDefaultPropsOfList<T>(
    list: Array<DefaultPropsGraphQL | null> = []
  ): Array<T> {
    const newList: T[] = []

    for (const value of list) {
      if (!value) {
        continue
      }

      const {
        __typename,
        _deleted,
        _lastChangedAt,
        _version,
        createdAt,
        updatedAt,
        ...props
      } = value
      newList.push({ ...props } as T)
    }

    return newList
  }
}
