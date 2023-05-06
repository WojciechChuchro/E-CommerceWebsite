export interface Index {
  status: "idle" | "loading" | "succeeded" | "failed"
  error: any
}
