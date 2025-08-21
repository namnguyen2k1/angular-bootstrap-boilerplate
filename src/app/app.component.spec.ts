import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent (Standalone)", () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  it(`should have title 'Angular Bootstrap Boilerplate'`, () => {
    expect(component.title).toBe("Angular Bootstrap Boilerplate");
  });

  it("should render title in h1", () => {
    const h1 = compiled.querySelector("#title");
    expect(h1?.textContent).toContain("Angular Bootstrap Boilerplate");
  });

  it("should contain router outlet", () => {
    const routerOutlet = compiled.querySelector("router-outlet");
    expect(routerOutlet).toBeTruthy();
  });
});
