import type { Content } from 'models'

export type RmDefaultParameter<T> = Omit<
  T,
  | '__typename'
  | '_version'
  | '_deleted'
  | '_lastChangedAt'
  | 'updatedAt'
  | 'createdAt'
>

/**
 * Dictionary names
 * {A}{ModelName} = Name type or model
 * A = Prefix of adapter
 * ModelName = Name original of model
 *
 * Example
 * Content = Name Original
 * AContent = Name Adapter
 *
 */

export type AContent = RmDefaultParameter<Content>
