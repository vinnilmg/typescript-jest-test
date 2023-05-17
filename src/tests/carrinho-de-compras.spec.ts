import { Desconto } from './../desconto';
import { CarrinhoDeCompras, Produto } from '../carrinho-de-compras';

const createSut = () => {
  const descontoMock = createDescontoMock();
  const sut = new CarrinhoDeCompras(descontoMock);
  return { sut, descontoMock };
};

const createSutWithProdutos = () => {
  const descontoMock = createDescontoMock();
  const sut = new CarrinhoDeCompras(descontoMock);
  const produto1 = createProdutoMock('Celular', 1300);
  const produto2 = createProdutoMock('Fone', 200);
  sut.addItem(produto1);
  sut.addItem(produto2);
  return { sut, descontoMock };
};

const createDescontoMock = (): Desconto => {
  // Mockando a classe Desconto
  class DescontoMock extends Desconto {
    calculaWithDesconto(total: number): number {
      return 0;
    }
  }
  return new DescontoMock(0.5);
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
    const { sut } = createSutWithProdutos();
    expect(sut.getQtdItems()).toBe(2);
  });

  it('Deve aplicar o desconto no carrinho de compras', () => {
    const { sut, descontoMock } = createSutWithProdutos();
    const descontoMockSpy = jest.spyOn(descontoMock, 'calculaWithDesconto').mockReturnValueOnce(750);

    sut.calculaDesconto();

    expect(descontoMockSpy).toHaveBeenCalledTimes(1);
    expect(descontoMockSpy).toHaveBeenCalledWith(1500);
    expect(sut.checkout()).toBe(750);
  });
});
