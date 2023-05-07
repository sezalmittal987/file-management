import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropWindowComponent } from './drag-drop-window.component';

describe('DragDropWindowComponent', () => {
  let component: DragDropWindowComponent;
  let fixture: ComponentFixture<DragDropWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
