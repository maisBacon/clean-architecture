import { DBProperty } from '../../data/services/property'
import { CurrencyService, SquareMetersService } from '../../utils'

const currency = new CurrencyService()
const squareService = new SquareMetersService()
const makeService = new DBProperty(currency,squareService)
export default makeService
