import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotacaoComponent } from './rotacao.component';

describe('RotacaoComponent', () => {
  let component: RotacaoComponent;
  let fixture: ComponentFixture<RotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RotacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
