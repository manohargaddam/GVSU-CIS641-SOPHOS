import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';

// Material
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {
  DashboardModalComponent,
  BoardViewComponent,
  BoardEditItemComponent,
  BoardViewItemComponent,
  DashBoardsListComponent,
  DashboardPanelComponent,
  DashboardPanelActionsComponent,
} from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardModalComponent,
    BoardViewComponent,
    BoardEditItemComponent,
    BoardViewItemComponent,
    DashBoardsListComponent,
    DashboardPanelComponent,
    DashboardPanelActionsComponent,
  ],
  imports: [
    CommonModule,
    OrderModule,
    DashboardRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatTabsModule,
    MatBadgeModule,
    MatSelectModule,
    MatListModule,
    DragDropModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
