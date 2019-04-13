import { TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { testRoutes } from './app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect } from 'chai';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(testRoutes),
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

  it('should change text after motify innerText', () => {
    const nativeEl = fixture.nativeElement;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    const boxEl = nativeEl.querySelector('p');
    expect(boxEl.textContent).to.equal('Changed!');
  });



});
