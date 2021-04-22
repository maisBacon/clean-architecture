export interface Property {
  calculation: (request: Property.Params) => Property.Result
}

export namespace Property {
  export type Result = {
    success: string
  }
  export type Params = {
    meters: string
    value: string
  }
}
