export class PropertySpy {
  result = '10'
  calculation (request: {meters: string, value: string}): string {
    return this.result
  }
}
