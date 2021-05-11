import { SquareMeters } from '../../presentation/controllers'
import makeService from './makeService'

const Controller = new SquareMeters(makeService)

export default Controller
