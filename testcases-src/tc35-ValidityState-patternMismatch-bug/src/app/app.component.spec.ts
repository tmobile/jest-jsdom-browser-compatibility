import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { testRoutes } from "./app-routing.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { expect } from "chai";
import { By } from "@angular/platform-browser";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(testRoutes),
        HttpClientTestingModule
      ],
      declarations: [AppComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

  it("should get correct input properties", () => {
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css("input"));
    const el = element.nativeElement;
    expect(el.pattern).to.equal("[a-z]+");
    expect(el.value).to.equal("abc123");
    expect(el.validity.patternMismatch).to.equal(true);
  });
});
