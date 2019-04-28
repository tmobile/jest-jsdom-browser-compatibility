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

  it('NodeList.item', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const els = fixture.nativeElement.querySelectorAll('.test');
    expect(els.item(1).textContent).to.equal('test');
  });
  it('NodeList.entries', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const els = fixture.nativeElement.querySelectorAll('.test');
    expect(els.entries).to.be.instanceOf(Function);
  });
  it('NodeList.forEach', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const els = fixture.nativeElement.querySelectorAll('.test');
    expect(els.forEach).to.be.instanceOf(Function);
  });
  it('NodeList.keys', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const els = fixture.nativeElement.querySelectorAll('.test');
    expect(els.keys).to.be.instanceOf(Function);
  });
  it('NodeList.values', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const els = fixture.nativeElement.querySelectorAll('.test');
    expect(els.values).to.be.instanceOf(Function);
  });
});
