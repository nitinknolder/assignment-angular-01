// import {TestBed, async, ComponentFixture} from '@angular/core/testing';
// import {HomeComponent} from './home.component';
// import {RouterTestingModule} from '@angular/router/testing';
// import {HttpClientModule} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';
// import {Router} from '@angular/router';
// import {HomeService} from './home.service';
// import {FormsModule} from '@angular/forms';
//
// const mockRouter = {
//   navigate: jasmine.createSpy('navigate')
// };
//
// describe('HomeComponent', () => {
//   let fixture: ComponentFixture<HomeComponent>;
//   let comp: HomeComponent;
//   let service: HomeService;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [HomeComponent],
//       imports: [RouterTestingModule, HttpClientModule, FormsModule],
//       providers: [HomeService, {provide: Router, useValue: mockRouter}]
//     }).compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomeComponent);
//     comp = fixture.debugElement.componentInstance;
//     service = TestBed.get(HomeService);
//   });
//
//   it('be defined', () => {
//     expect(comp).toBeDefined();
//   });
//
//   it('be able to get data from service', () => {
//     spyOn(service, 'getData').and.returnValue(Observable.of({message: 'success'}));
//     spyOn(console, 'log');
//     comp.getDataFromService();
//     expect(console.log).toHaveBeenCalled();
//     expect(comp.data).toEqual('success');
//   });
//
//   it('be able to get data from service', () => {
//     spyOn(service, 'getData').and.returnValue(Observable.throw({message: 'failure'}));
//     spyOn(console, 'log');
//     comp.getDataFromService();
//     expect(console.log).toHaveBeenCalled();
//     expect(comp.data).toEqual(undefined);
//   });
// });
//
