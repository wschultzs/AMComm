import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfInfoCardComponent } from './cpf-info-card.component';

describe('CpfInfoCardComponent', () => {
  let component: CpfInfoCardComponent;
  let fixture: ComponentFixture<CpfInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpfInfoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpfInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
