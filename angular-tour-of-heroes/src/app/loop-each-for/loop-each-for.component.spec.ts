import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopEachForComponent } from './loop-each-for.component';

describe('LoopEachForComponent', () => {
  let component: LoopEachForComponent;
  let fixture: ComponentFixture<LoopEachForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoopEachForComponent]
    });
    fixture = TestBed.createComponent(LoopEachForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
