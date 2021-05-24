import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesOverviewComponent } from './houses-overview.component';
import { HousesOverviewRoutingModule } from './houses-overview-routing.module';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  declarations: [HousesOverviewComponent],
  imports: [CommonModule, HousesOverviewRoutingModule, CardModule],
})
export class HousesOverviewModule {}
