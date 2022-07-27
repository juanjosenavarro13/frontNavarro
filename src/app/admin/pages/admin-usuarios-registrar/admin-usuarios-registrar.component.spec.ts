import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosRegistrarComponent } from './admin-usuarios-registrar.component';

describe('AdminUsuariosRegistrarComponent', () => {
  let component: AdminUsuariosRegistrarComponent;
  let fixture: ComponentFixture<AdminUsuariosRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsuariosRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsuariosRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
