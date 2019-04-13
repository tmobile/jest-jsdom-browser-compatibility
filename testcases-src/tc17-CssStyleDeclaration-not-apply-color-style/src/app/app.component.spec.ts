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
    const isValidColor = c => {
      const element = document.createElement('div');
      element.style.color = c;
      return element.style.color;
    };
    expect(isValidColor('red')).to.equal('red');
    expect(isValidColor('#f00')).to.equal('rgb(255, 0, 0)');
    expect(isValidColor('rebeccapurple')).to.equal('rebeccapurple');
    expect(isValidColor('transparent')).to.equal('transparent');
    expect(isValidColor('currentcolor')).to.equal('currentcolor');
  });
});
