import { Produto } from '../produto';

// System under test
const createSut = (name: string, price: number): Produto => {
  return new Produto(name, price);
};

describe('Produto', () => {
  it('should be return undefined', () => {
    const sut = createSut('Camiseta', 49.9);

    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(49.9);
  });
});
