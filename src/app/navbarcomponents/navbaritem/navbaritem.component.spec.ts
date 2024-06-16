import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaritemComponent } from './navbaritem.component';

describe('NavbaritemComponent', () => {
  let component: NavbaritemComponent;
  let fixture: ComponentFixture<NavbaritemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbaritemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbaritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
