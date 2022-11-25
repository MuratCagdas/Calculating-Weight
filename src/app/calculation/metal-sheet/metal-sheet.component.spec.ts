import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalSheetComponent } from './metal-sheet.component';

describe('MetalSheetComponent', () => {
  let component: MetalSheetComponent;
  let fixture: ComponentFixture<MetalSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetalSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
