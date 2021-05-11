import { Property , Currency, SquareMeters } from '../../domain'

export class DBProperty implements Property {
  constructor (
    private readonly currency: Currency,
    private readonly squareMeters: SquareMeters
  ) {
    this.currency = currency
    this.squareMeters = squareMeters
  }

  async calculation (request: Property.Params): Promise<Property.Result> {
    const getValue = !request.value && (await this.squareMeters.getPrice())
    const price = request.value || getValue.data.value
    const result = parseInt(request.meters) * parseInt(price)
    return this.currency.formatCurrency(result)
  }
}
