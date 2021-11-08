import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeUsuarioModificarComponent } from './gestion-de-usuario-modificar.component';

describe('GestionDeUsuarioModificarComponent', () => {
  let component: GestionDeUsuarioModificarComponent;
  let fixture: ComponentFixture<GestionDeUsuarioModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeUsuarioModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeUsuarioModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
