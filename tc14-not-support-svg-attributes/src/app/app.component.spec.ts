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

  it('should test svg attributes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const svg = fixture.nativeElement.querySelector('#my-svg');
    expect(svg.transform.baseVal.consolidate().matrix).to.have.property('translate');

  });
});
