import { Desconto } from './../desconto';
import { CarrinhoDeCompras, Produto } from '../carrinho-de-compras';

const createSut = () => {
  const descontoMock = createDescontoMock();
  const sut = new CarrinhoDeCompras(descontoMock);
  return { sut, descontoMock };
};

const createDescontoMock = (): Desconto => {
  // Mockando a classe Desconto
  class DescontoMock extends Desconto {}
  return new DescontoMock();
};

const createProdutoMock = (nome: string, preco: number): Produto => {
  // Mockando a interface Produto
  class ProdutoMock implements Produto {
    constructor(public nome: string, public preco: number) {}
  }

  return new ProdutoMock(nome, preco);
};

describe('CarrinhoDeCompras', () => {
  it('Deve retornar um carrinho vazio se não houver itens adicionados', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('Deve retornar um carrinho com 2 itens', () => {
    const { sut } = createSut();
    const produto1 = createProdutoMock('Celular', 1500);
    const produto2 = createProdutoMock('Fone', 200);
    sut.addItem(produto1);
    sut.addItem(produto2);
    expect(sut.getQtdItems()).toBe(2);
  });
});
