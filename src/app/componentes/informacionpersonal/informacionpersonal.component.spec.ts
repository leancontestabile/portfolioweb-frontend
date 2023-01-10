import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionpersonalComponent } from './informacionpersonal.component';

describe('InformacionpersonalComponent', () => {
  let component: InformacionpersonalComponent;
  let fixture: ComponentFixture<InformacionpersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionpersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
