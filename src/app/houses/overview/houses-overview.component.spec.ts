import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesOverviewComponent } from './houses-overview.component';

describe('HousesOverviewComponent', () => {
  let component: HousesOverviewComponent;
  let fixture: ComponentFixture<HousesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HousesOverviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
