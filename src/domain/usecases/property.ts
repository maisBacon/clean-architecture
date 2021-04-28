export interface Property {
  calculation: (request: Property.Params) => Promise<Property.Result>
}

export namespace Property {
  export type Result = string

  export type Params = {
    meters: string
    value: string
  }
}
