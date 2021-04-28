import { SquareMeters } from '../domain'
import axios from 'axios'

export class SquareMetersService implements SquareMeters {
  async getPrice (): Promise<SquareMeters.Result> {
    const url = 'https://square-meter-value.herokuapp.com/'
    return await axios({
      method: 'get',
      url
    })
  }
}
