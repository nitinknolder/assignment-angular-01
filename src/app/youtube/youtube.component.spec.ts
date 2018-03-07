import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {YoutubeComponent} from './youtube.component';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';


describe('YoutubeComponent', () => {
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let comp: YoutubeComponent;
  let fixture: ComponentFixture<YoutubeComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [{provide: ActivatedRoute, useValue: mockRouter}]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeComponent);
    comp = fixture.debugElement.componentInstance;
  });
  it('should create Youtube component', () => {
    expect(comp).toBeDefined();
  });
  it('should return url', () => {
    inject([YoutubeComponent], (youtubeObject: YoutubeComponent) => {
      spyOn(youtubeObject, 'linkURL').and.returnValue(Observable.of('https://www.youtube.com/embed/TsIqaqE-WP4'));
      expect(comp.videoLink).toEqual('https://www.youtube.com/embed/TsIqaqE-WP4');
    });
  });
});
