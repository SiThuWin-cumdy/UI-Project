import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JestComponent } from './jest.component';

// describe('JestComponent', () => {
//   let component: JestComponent;
//   let fixture: ComponentFixture<JestComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ JestComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(JestComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('JestComponent', () => {
  let fixture: JestComponent;

  beforeEach(() => {
    fixture = new JestComponent();
  });

  describe('addNumbers', () => {
    it('should add together the 2 numbers passed', () => {

      const result = fixture.addNumbers(1, 3);

      expect(result).toEqual(4);
    });

    it('use 2 as the default value if second number is not passed', () => {

      const result = fixture.addNumbers(1);

      expect(result).toEqual(3);
    });
  });

  describe('methodThatCallsAnother', () => {
    it('should call call addNumbers', () => {
      const addNumbersSpy = jest.spyOn(fixture, 'addNumbers');

      fixture.methodThatCallsAnother();

      expect(addNumbersSpy).toBeCalledWith(1, 2);
    });
  });
  describe('testFunc', () => {
    it('should return true', () => {

      const result = fixture.testFunc();

      expect(result).toEqual(true);
    });
  });
});
