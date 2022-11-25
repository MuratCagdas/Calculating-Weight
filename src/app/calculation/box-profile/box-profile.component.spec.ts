import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxProfileComponent } from './box-profile.component';

describe('BoxProfileComponent', () => {
  let component: BoxProfileComponent;
  let fixture: ComponentFixture<BoxProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
