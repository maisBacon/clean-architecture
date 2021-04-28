import { Currency } from '../domain'
import intl from 'intl'

export class CurrencyService implements Currency {
  formatCurrency (num: number): string {
    return new intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(num)
  }
}
