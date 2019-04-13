import { TestBed, async, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { testRoutes } from './app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect } from 'chai';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(testRoutes),
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));



  it('should get correct text encode value',  () => {
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = 'aA1';
    input.nativeElement.dispatchEvent(new Event('input'));
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    const result = fixture.nativeElement.querySelector('p');
    expect(result.textContent).to.equal('97,65,49');
  });

});
