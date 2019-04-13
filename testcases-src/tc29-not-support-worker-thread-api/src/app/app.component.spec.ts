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

  it('should get correct value from worker', (done) => {

    setTimeout(() => {
      fixture.detectChanges();
      const el1 = fixture.debugElement.query(By.css('#box1'));
      expect(el1.nativeElement.textContent).to.equal('15');
      done();
    }, 500);
  });

});
