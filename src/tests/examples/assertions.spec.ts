describe('Primitive values', () => {
  it('should test jest assertions with primitive values', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeNull();
    expect(number).not.toBeFalsy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeGreaterThanOrEqual(10);

    expect(number).toBeCloseTo(9.996);

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { nome: 'Vinicius', idade: 24 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);

    expect(person).toHaveProperty('nome');
    expect(person).toHaveProperty('idade');
    expect(person).toHaveProperty('nome', 'Vinicius');
    expect(person).toHaveProperty('idade', 24);
    expect(person).not.toHaveProperty('sobrenome');

    expect(person.nome).toBe('Vinicius');
  });
});
