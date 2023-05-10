export interface Index {
  status: "idle" | "loading" | "succeeded" | "failed"
  errors: any
}
