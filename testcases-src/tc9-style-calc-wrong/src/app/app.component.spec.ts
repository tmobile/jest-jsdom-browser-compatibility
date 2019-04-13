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

  it('should get correct width for box1', () => {
    const box = fixture.debugElement.query(By.css('.box1')).nativeElement;
    console.log(box.style.width);
    expect(box.style.width).to.equal('20px');
  });

  it('should get correct width for box2', () => {
    const box = fixture.debugElement.query(By.css('.box2')).nativeElement;
    console.log();
    expect(box.style.width).to.equal('10vh');
  });

  it('should get correct width for box3', () => {
    const box = fixture.debugElement.query(By.css('.box3')).nativeElement;
    console.log(box.style.width);
    expect(box.style.width).to.equal('calc(30px)');
  });

  it('should get correct width for box4', () => {
    const box = fixture.debugElement.query(By.css('.box4')).nativeElement;
    console.log(box.style.width);
    expect(box.style.width).to.equal('calc(10px + 20%)');
  });

  it('should get correct width for box5', () => {
    const box = fixture.debugElement.query(By.css('.box5')).nativeElement;
    console.log(box.style.width);
    expect(box.style.width).to.equal('calc(10px + 100vh)');
  });

});
