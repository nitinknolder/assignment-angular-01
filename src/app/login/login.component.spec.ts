///<reference path="../../../node_modules/@angular/core/testing/src/test_bed.d.ts"/>
import {TestBed, async, ComponentFixture, inject} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {Router} from '@angular/router';
import {LoginComponent} from './login.component';
import {Observable} from 'rxjs/Observable';
import {FormsModule} from '@angular/forms';

const mockRouter = {
  navigate: jasmine.createSpy('navigate')
};

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let comp: LoginComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, HttpClientModule, FormsModule],
      providers: [{provide: Router, useValue: mockRouter}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.debugElement.componentInstance;

  });

  it('be defined', () => {
    expect(comp).toBeDefined();
  });

  it('be able to validate credentials and submit form', () => {
    inject([LoginComponent], (loginObject: LoginComponent) => {
      spyOn(loginObject, 'submitForm').and.returnValue(Observable.of({message: 'success'}));
      expect(comp.email).toEqual(loginObject.email = '');
      expect(comp.password).toEqual(loginObject.password = '');
      expect(comp.submitForm).toEqual(this.router.navigate(['/login/home']));
    });
  });
});
