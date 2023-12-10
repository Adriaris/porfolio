import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiValorComponent } from './mi-valor.component';

describe('MiValorComponent', () => {
  let component: MiValorComponent;
  let fixture: ComponentFixture<MiValorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiValorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
