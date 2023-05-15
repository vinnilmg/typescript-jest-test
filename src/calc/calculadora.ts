export class Calculadora {
  resultado = 0;

  somaDoisNumeros(x: number, y: number): void {
    console.log('Calculando:', x, '+', y);
    this.resultado = x + y;
  }

  resultadoTotal(): number {
    return this.resultado;
  }

  imprimeResultado(): void {
    console.log(`O resultado é ${this.resultado}`);
  }
}
