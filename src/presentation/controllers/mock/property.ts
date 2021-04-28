import { Property } from '../../../domain'
export class PropertySpy {
  result = 'R$10.000,00'

  async calculation (request: Property.Params): Promise<Property.Result> {
    return this.result
  }
}
