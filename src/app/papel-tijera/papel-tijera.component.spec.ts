import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapelTijeraComponent } from './papel-tijera.component';

describe('PapelTijeraComponent', () => {
  let component: PapelTijeraComponent;
  let fixture: ComponentFixture<PapelTijeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapelTijeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapelTijeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
