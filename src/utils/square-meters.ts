import env from '../main/config/env'
import { SquareMeters } from '../domain'
import axios from 'axios'

export class SquareMetersService implements SquareMeters {
  async getPrice (): Promise<SquareMeters.Result> {
    const url = env.url
    const data = url ? await axios({
      method: 'get',
      url
    })
      : undefined

    if (!data) throw new Error('axios error...')
    return data
  }
}
