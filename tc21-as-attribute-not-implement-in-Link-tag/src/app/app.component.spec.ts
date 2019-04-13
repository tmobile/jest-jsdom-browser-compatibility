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
    const link = fixture.nativeElement.querySelector('#test');
    link.rel = 'prefetch';
    link.as = 'script';
    expect(link.hasAttribute('rel')).to.equal(true);
    expect(link.hasAttribute('as')).to.equal(true);
  });
});
