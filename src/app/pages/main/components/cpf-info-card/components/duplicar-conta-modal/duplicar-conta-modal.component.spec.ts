import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicarContaModalComponent } from './duplicar-conta-modal.component';

describe('DuplicarContaModalComponent', () => {
  let component: DuplicarContaModalComponent;
  let fixture: ComponentFixture<DuplicarContaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicarContaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicarContaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
