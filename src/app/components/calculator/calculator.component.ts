import { CalculatorService } from './../../services/calculator.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  result = '0';

  @Output() newItemEvent = new EventEmitter<string>();
  constructor(public srv: CalculatorService) {
  }

  getNumber(value: any): void {
    let data = parseFloat(value);
    console.log(value);
    return value;
  }

  ngOnInit(): void {
  }

  cal() {
    try {
      let result = this.srv.inputView;
      let str = "12/5*9+9.4*2"
      let res2 = (new Function('return ' + result)())
      if (result != undefined) {
        this.srv.inputView = res2;
        console.log(res2)
        if(res2==undefined){
          this.srv.inputView = result;
        }
      }
    } catch (error) {
      this.srv.inputView = ('error');
    }


    // try {
    //   let result = eval(this.srv.inputView);
    //   console.log(result);
    //   if (result != undefined) {
    //     this.srv.inputView = result;
    //   }
    // } catch (error) {
    //   this.srv.inputView = ('error');
    // }

  }
  // input: any;
  // pressNum() {
  //   let data = parseFloat(this.input);
  //   if (isNaN(data)) {
  //     if (this.input == '=') {
  //       let result = this.srv.calculate(
  //         this.srv.currentResult,
  //         this.srv.currentInput,
  //         this.srv.currentOperator
  //       );
  //       this.srv.currentInput = 0;
  //       this.srv.currentOperator = '';

  //       this.srv.setResult(result);
  //     } else {
  //       this.srv.currentOperator = this.input;
  //     }
  //   } else {
  //     if (this.srv.currentOperator != '') {
  //       this.srv.currentInput = parseFloat(
  //         this.srv.currentInput.toString() + data.toString()
  //       );
  //     } else {
  //       // this.srv.currentInput = data;
  //       this.srv.setResult(
  //         parseFloat(`${this.srv.currentResult}${data}`)
  //       );
  //     }
  //   }
  // }
  clear() {
    this.srv.inputView = '';
  }
}
