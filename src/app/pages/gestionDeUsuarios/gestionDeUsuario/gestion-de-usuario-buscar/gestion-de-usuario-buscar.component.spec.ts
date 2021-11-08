import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeUsuarioBuscarComponent } from './gestion-de-usuario-buscar.component';

describe('GestionDeUsuarioBuscarComponent', () => {
  let component: GestionDeUsuarioBuscarComponent;
  let fixture: ComponentFixture<GestionDeUsuarioBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeUsuarioBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeUsuarioBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
