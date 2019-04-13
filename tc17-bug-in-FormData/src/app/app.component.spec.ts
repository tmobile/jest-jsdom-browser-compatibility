import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ExpectedConditions } from 'protractor';
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
    const form = fixture.nativeElement.querySelector('#my-form');
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'foo';
    // input.value = 'hi' // if you uncomment this, the test will passs
    form.appendChild(input);
    const formData = new FormData(form);

    const hasFoo = formData.has('foo');
    expect(hasFoo).to.equal(true);
  });
});
