import { Property } from '../../domain'
import { Currency } from '../../domain/usecases/currency'
import { SquareMeters } from '../../domain/usecases/square-meters'

export class DBProperty implements Property {
  constructor (
    private readonly currency: Currency,
    private readonly squareMeters: SquareMeters
  ) {
    this.currency = currency
    this.squareMeters = squareMeters
  }

  async calculation (request: Property.Params): Promise<Property.Result> {
    console.log('service', request)
    const getValue = !request.value && (await this.squareMeters.getPrice())
    const price = request.value || getValue.data.value
    const result = parseInt(request.meters) * parseInt(price)
    return this.currency.formatCurrency(result)
  }
}
