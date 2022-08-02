import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() name = '';

  constructor(public srv: CalculatorService) { }

  ngOnInit() {
  }

  set(){
    this.srv.inputView +=this.name
    console.log(this.srv.inputView);
  }
}
