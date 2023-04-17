export type Nullable<T> = T | null

export type PromiseResolvedType<T> = T extends Promise<infer R> ? R : never
export type ReturnedPromiseResolvedType<T> = PromiseResolvedType<
  // @ts-ignore
  ReturnType<T>
>
