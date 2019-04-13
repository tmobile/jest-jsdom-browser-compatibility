import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { expect } from 'chai';
import { spy } from 'sinon';

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
    const app = fixture.debugElement.componentInstance;
    const spiedCallback = spy(app, 'onClickMe');
    const btn = fixture.nativeElement.querySelector('#test');
    btn.click();
    expect(spiedCallback.calledOnce).to.equal(true);

    btn.disabled = true;
    btn.click();
    expect(spiedCallback.calledOnce).to.equal(true);

    btn.disabled = false;
    btn.click();
    expect(spiedCallback.calledTwice).to.equal(true);
  });
});
