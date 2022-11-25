import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAngelIronComponent } from './l-angel-iron.component';

describe('LAngelIronComponent', () => {
  let component: LAngelIronComponent;
  let fixture: ComponentFixture<LAngelIronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LAngelIronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LAngelIronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
