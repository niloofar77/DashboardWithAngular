import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  @Input() directionSort: 'asc' | 'desc' = 'asc';
  @Output() sortItemsEvent = new EventEmitter<'asc' | 'desc'>();

  sortItems() {
    this.sortItemsEvent.emit();
  }
}
