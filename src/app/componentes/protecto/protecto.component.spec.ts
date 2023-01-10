import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectoComponent } from './protecto.component';

describe('ProtectoComponent', () => {
  let component: ProtectoComponent;
  let fixture: ComponentFixture<ProtectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
