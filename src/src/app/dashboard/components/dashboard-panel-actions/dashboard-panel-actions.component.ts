import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-dashboard-panel-actions',
  templateUrl: './dashboard-panel-actions.component.html',
  styleUrls: ['./dashboard-panel-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPanelActionsComponent {
  @Input() creator: boolean = false;
  @Output() createBoard = new EventEmitter<void>();
  @Output() search = new EventEmitter<string>();

  onCreateBoard(): void {
    this.createBoard.emit();
  }

  onSearch(value: string): void {
    this.search.emit(value);
  }

}
