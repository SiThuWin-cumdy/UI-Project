import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-jest',
	templateUrl: './jest.component.html',
	styleUrls: ['./jest.component.scss']
})
export class JestComponent {

	constructor() { }

	public addNumbers(
		number1: number,
		number2: number = 2
	): number {
		return number1 + number2;
	}

	public methodThatCallsAnother(): number {
		return this.addNumbers(1, 2);
	}

	testFunc() {
		return true;
	}

}
