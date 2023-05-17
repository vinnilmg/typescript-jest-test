import { Desconto } from './desconto';

export interface Produto {
  nome: string;
  preco: number;
}

export class CarrinhoDeCompras {
  private readonly _items: Produto[] = [];
  private result = 0;

  constructor(public desconto: Desconto) {}

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  addItem(item: Produto): void {
    this._items.push(item);
  }

  getItens(): Produto[] {
    return this._items;
  }

  getQtdItems(): number {
    return this._items.length;
  }

  total() {
    return this.getItens().reduce((acc, currentValue) => acc + currentValue.preco, 0);
  }

  checkout() {
    return this.result;
  }

  calculaDesconto(): number {
    this.result = this.desconto.calculaWithDesconto(this.total());
    return this.result;
  }
}
