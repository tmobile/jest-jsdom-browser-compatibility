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


  it('should get correct text encode value', async () => {
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.select();
    console.log( input.nativeElement);
    input.nativeElement.dispatchEvent(new Event('select'));
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    await fixture.whenStable();
    console.log( input.nativeElement);
    console.log(window.getSelection());
    const result = fixture.nativeElement.querySelector('p');
    expect(1).to.equal(1);
  });





});
