export class ExchangeCurrencyRate {
  constructor(public readonly fromSymbol: string,
              public readonly toSymbol: string,
              public readonly price: number,
              public readonly open24Hour: number,
              public readonly high24Hour: number,
              public readonly low24Hour: number,
              public readonly volume24Hour: number,
              public readonly volume24HourTo: number) {
  }

  get change24Hour(): number {
      return this.price - this.open24Hour;
  }

  get change24HourPercentage(): number {
      return Math.ceil((this.change24Hour / this.open24Hour) * 10000) / 100;
  }
}
