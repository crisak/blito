import type { DefaultPropsGraphQL } from '@/models/ModelsAdapter.model'

export default class GraphQLUtil {
  static removeDefaultPropsOfList<T>(
    list: Array<DefaultPropsGraphQL | null> = []
  ): Array<T> {
    const newList: T[] = []

    for (const value of list) {
      if (!value) {
        continue
      }

      const valueFilter = GraphQLUtil.removeDefaultProps<T>(value)

      newList.push(valueFilter)
    }

    return newList
  }

  static removeDefaultProps<T>(value: any): T {
    const {
      __typename,
      _deleted,
      _lastChangedAt,
      createdAt,
      updatedAt,
      ...props
    } = value
    return { ...props } as T
  }
}
