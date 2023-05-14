import { Calculadora } from '../calc/calculadora';

describe('Calculadora', () => {
  afterEach(() => jest.clearAllMocks()); // Limpar mocks

  it('should return undefined', () => {
    // System under test
    const sut = new Calculadora();
    expect(sut.somaDoisNumeros(1, 2)).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Calculadora();
    const consoleSpy = jest.spyOn(console, 'log'); // "Observando" o método console.log (mock)

    sut.imprimeResultado();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "O resultado é 0"', () => {
    const sut = new Calculadora();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.imprimeResultado();
    expect(consoleSpy).toHaveBeenCalledWith('O resultado é 0');
  });
});
