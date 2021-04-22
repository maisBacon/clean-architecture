import { Property } from '../../../domain'
export class PropertySpy {
  result = { success: 'R$10.000,00' }

  calculation (request: Property.Params): Property.Result {
    return this.result
  }
}
