import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

// describe('AboutComponent', () => {
//   let component: AboutComponent;
//   let fixture: ComponentFixture<AboutComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AboutComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AboutComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe('AboutComponent', () => {
  let fixture: AboutComponent;

  beforeEach(() => {
    fixture = new AboutComponent();
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
});