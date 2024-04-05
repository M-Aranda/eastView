import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchViewComponent } from './witch-view.component';

describe('WitchViewComponent', () => {
  let component: WitchViewComponent;
  let fixture: ComponentFixture<WitchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WitchViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WitchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
