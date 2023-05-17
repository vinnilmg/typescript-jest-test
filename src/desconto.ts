export class Desconto {
  constructor(public desconto: number) {}

  calculaWithDesconto(total: number): number {
    return total * this.desconto;
  }
}
