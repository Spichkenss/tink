export type ActionReturnType = {
  error: string; success?: never
} | {
  error?: never; success: string
}

export type Aggregate<TBase, TAdd> = TBase & TAdd;
