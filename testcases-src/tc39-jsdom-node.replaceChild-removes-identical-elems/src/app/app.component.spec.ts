import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { expect } from 'chai';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const el1 = fixture.nativeElement.querySelector('#test');
    const el2 = el1;
    el1.parentNode.replaceChild(el1, el2);
    expect(fixture.nativeElement.querySelector('#test')).to.not.be.null;
  });
});
