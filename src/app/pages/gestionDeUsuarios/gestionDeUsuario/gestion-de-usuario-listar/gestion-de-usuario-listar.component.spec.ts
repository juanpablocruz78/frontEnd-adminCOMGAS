import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeUsuarioListarComponent } from './gestion-de-usuario-listar.component';

describe('GestionDeUsuarioListarComponent', () => {
  let component: GestionDeUsuarioListarComponent;
  let fixture: ComponentFixture<GestionDeUsuarioListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeUsuarioListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeUsuarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
