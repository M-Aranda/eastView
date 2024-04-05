import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeViewComponent } from './eye-view.component';

describe('EyeViewComponent', () => {
  let component: EyeViewComponent;
  let fixture: ComponentFixture<EyeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EyeViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EyeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
