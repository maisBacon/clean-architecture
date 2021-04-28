export interface SquareMeters {
  getPrice: () => Promise<SquareMeters.Result>
}

export namespace SquareMeters {
  export type Result = any
}
