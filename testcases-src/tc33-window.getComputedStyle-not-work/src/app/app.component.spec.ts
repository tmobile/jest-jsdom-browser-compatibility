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

  it('should get correct color of element', () => {
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#d1'));
    const color = getComputedStyle(el.nativeElement).color;
    expect(color).to.equal('rgb(255, 0, 0)');
  });

  it('should get correct font size of element', () => {
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#d1'));
    const fontSize = getComputedStyle(el.nativeElement).fontSize;
    expect(fontSize).to.equal('20px');
  });

});
