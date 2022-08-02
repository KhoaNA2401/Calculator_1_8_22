import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  inputView= '';
  input= '';
  currentOperator: string = '';
  currentResult: number = 0;
  currentInput: number = 0;
  constructor() { }
  callbacks: any[] = [];
  // cong(input: any) {
  //   const array = input.split(" ");
  //   let a = Number(array[0]);
  //   let b = Number(array[1]);
  //   let result = a + b;
  //   return result;
  // }
  // tru(input: any) {
  //   const array = input.split(" ");
  //   let a = Number(array[0]);
  //   let b = Number(array[1]);
  //   return a - b;
  // }
  // nhan(input: any) {
  //   const array = input.split(" ");
  //   let a = Number(array[0]);
  //   let b = Number(array[1]);
  //   return a * b;
  // }
  // chia(input: any) {
  //   const array = input.split(" ");
  //   let a = Number(array[0]);
  //   let b = Number(array[1]);
  //   return a / b;
  // }
  calculate(x: number, y: number, operator: string) {
    let result = 0;
    console.log(x, y, operator);
    switch (operator) {
      case '+':
        result = x + y;
        break;

      case '-':
        result = x - y;
        break;

      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
        break;
    }
    return result;
  }
  setOnChangeResult(callback: (value: number) => void): void {
    this.callbacks.push(callback);
  }

  setResult(result: number) {
    this.currentResult = result;
    for (let callback of this.callbacks) {
      callback(this.currentResult);
    }
  }
}
