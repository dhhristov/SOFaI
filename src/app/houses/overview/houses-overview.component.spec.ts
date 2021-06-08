import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseService } from 'src/app/shared/services';
import { MockHouseService } from 'src/app/shared/services/mocks/houseService.service';

import { HousesOverviewComponent } from './houses-overview.component';

describe('HousesOverviewComponent', () => {
  let component: HousesOverviewComponent;
  let fixture: ComponentFixture<HousesOverviewComponent>;

  let houseService: HouseService;

  let onGetAllHousesSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [HousesOverviewComponent],
      imports: [HttpClientModule],
      providers: [{ provide: HouseService, useClass: MockHouseService }],
    }).compileComponents();
    fixture = TestBed.createComponent(HousesOverviewComponent);
    component = fixture.componentInstance;
    houseService = TestBed.inject<HouseService>(HouseService);
    onGetAllHousesSpy = spyOn(houseService, 'getAllHouses');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call houseService', () => {
    expect(onGetAllHousesSpy).toHaveBeenCalled();
  });
});
