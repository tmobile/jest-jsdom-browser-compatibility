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
    function getObjectURL() {
      const file = new File([''], 'filename', { type: 'text/html' });
      return URL.createObjectURL(file);
    }
    expect(getObjectURL).to.not.throw();
  });
});
