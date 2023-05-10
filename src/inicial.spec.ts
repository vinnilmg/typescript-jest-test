describe('Testes básicos', () => {
  describe('Testes com IT', () => {
    it('Descrição: Número é 1', () => {
      const number = 1;
      expect(number).toBe(1);
    });

    it('Descrição: Número não é 1', () => {
      const number = 2;
      expect(number).not.toBe(1);
    });
  });

  describe('Testes com TEST', () => {
    test('Descrição: String é teste', () => {
      const str = 'teste';
      expect(str).toBe('teste');
    });

    test('Descrição: String não é teste', () => {
      const str = 'teste123';
      expect(str).not.toBe('teste');
    });
  });
});
