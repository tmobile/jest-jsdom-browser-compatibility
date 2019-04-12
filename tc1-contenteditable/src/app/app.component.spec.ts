import { TestBed, async} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { testRoutes } from './app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect } from 'chai';

describe('AppComponent', () => {

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
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));


  it('should get correct activeElement', () => {
    const divElement = document.getElementById('editable');
    divElement.focus();
    expect(document.activeElement).to.equal(divElement);
  });

});
