import { SquareMeters } from '../domain'
import axios from 'axios'

export class SquareMetersService implements SquareMeters {
  async getPrice (): Promise<SquareMeters.Result> {
    const url = process.env.URL_GET_VALUE
    return await axios({
      method: 'get',
      url
    })
  }
}
