import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgComponent } from './navg.component';

describe('NavgComponent', () => {
  let component: NavgComponent;
  let fixture: ComponentFixture<NavgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavgComponent]
    });
    fixture = TestBed.createComponent(NavgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
