import { Calculadora } from '../calc/calculadora';

// System under test
const createSut = () => {
  return new Calculadora();
};

describe('Calculadora', () => {
  afterEach(() => jest.clearAllMocks()); // Limpar mocks

  describe('imprimeResultado', () => {
    it('should return undefined', () => {
      const sut = createSut();
      expect(sut.imprimeResultado()).toBeUndefined();
    });

    it('should call console.log once', () => {
      const sut = createSut();
      const consoleSpy = jest.spyOn(console, 'log'); // "Observando" o método console.log (mock)

      sut.imprimeResultado();
      expect(consoleSpy).toHaveBeenCalledTimes(1);
    });

    it('should call console.log with "O resultado é 0"', () => {
      const sut = createSut();
      const consoleSpy = jest.spyOn(console, 'log');

      sut.imprimeResultado();
      expect(consoleSpy).toHaveBeenCalledWith('O resultado é 0');
    });
  });

  describe('somaDoisNumeros', () => {
    it('should return undefined', () => {
      const sut = createSut();
      expect(sut.somaDoisNumeros(1, 2)).toBeUndefined();
    });

    it('should call console.log once', () => {
      const sut = createSut();
      const consoleSpy = jest.spyOn(console, 'log');

      sut.somaDoisNumeros(1, 2);
      expect(consoleSpy).toHaveBeenCalledTimes(1);
    });

    it('should call console.log with "Calculando:" and x and "+" and y', () => {
      const sut = createSut();
      const consoleSpy = jest.spyOn(console, 'log');

      sut.somaDoisNumeros(1, 2);
      expect(consoleSpy).toHaveBeenCalledWith('Calculando:', 1, '+', 2);
    });
  });
});
