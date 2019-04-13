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
    const parent = fixture.nativeElement.querySelector('#test');
    const elem = document.createElement('p');
    elem.textContent = 'hello,';
    const text = new Text(' world');

    parent.append(elem.textContent, text.textContent);
    expect(parent.textContent).to.equal('hello, world');
  });
});
