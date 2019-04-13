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


  it('should get backgroundPosition', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const el = fixture.nativeElement.querySelector('#test');
    expect(el.style.backgroundPosition).to.equal('0px 50%');
  });

  it('should get backgroundPosition 2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const el = fixture.nativeElement.querySelector('#test2');
    expect(el.style.backgroundPosition).to.equal('50% 30%');
  });
});
