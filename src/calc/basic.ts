function soma(...numbers: number[]): number {
  return numbers.reduce((acc, currentValue) => acc + currentValue, 0);
}

export function multiplica(...numbers: number[]): number {
  return numbers.reduce((acc, currentValue) => acc * currentValue, 1);
}

console.log(soma(1, 2, 3, 10));
console.log(multiplica(1, 2, 5));
