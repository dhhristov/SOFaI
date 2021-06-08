import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { createHouse } from 'src/app/shared/factories/house.factory';
import { HouseService } from 'src/app/shared/services';
import { MockHouseService } from 'src/app/shared/services/mocks/houseService.service';
import { HouseComponent } from './house.component';

describe('HouseComponent', () => {
  let component: HouseComponent;
  let fixture: ComponentFixture<HouseComponent>;

  let houseService: HouseService;
  let route: ActivatedRoute;

  let onGetSingleHouseSpy: jasmine.Spy;
  let onGetHouseByUrlSpy: jasmine.Spy;
  let onGetCharacterByUrlSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [HouseComponent],
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
          },
        },
        {
          provide: HouseService,
          useClass: MockHouseService,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(HouseComponent);
    component = fixture.componentInstance;
    houseService = TestBed.inject<HouseService>(HouseService);
    route = TestBed.inject<ActivatedRoute>(ActivatedRoute);
    onGetSingleHouseSpy = spyOn(houseService, 'getSingleHouse');
    onGetCharacterByUrlSpy = spyOn(houseService, 'getCharacterByURL');
    onGetHouseByUrlSpy = spyOn(houseService, 'getHouseByURL');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSingleHouse with id = 1', () => {
    expect(onGetSingleHouseSpy).toHaveBeenCalledWith(1);
  });
});
