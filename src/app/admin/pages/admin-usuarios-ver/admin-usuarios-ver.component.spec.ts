import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosVerComponent } from './admin-usuarios-ver.component';

describe('AdminUsuariosVerComponent', () => {
  let component: AdminUsuariosVerComponent;
  let fixture: ComponentFixture<AdminUsuariosVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsuariosVerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsuariosVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
