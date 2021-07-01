import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public addNumbers(
    number1: number,
    number2: number = 2
  ): number {
    return number1 + number2;
  }

  public methodThatCallsAnother(): number {
    return this.addNumbers(1, 2);
  } 

}
