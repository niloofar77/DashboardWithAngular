import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  imports:[CommonModule]
})
export class PaginationComponent {
  @Input() totalItems: number = 0; 
  @Input() itemsPerPage: number = 10; 
  @Input() currentPage: number = 1;

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): (number | string)[] {
    const pages: (number | string)[] = [];
    const totalPages = this.totalPages;

    if (totalPages <= 7) {

      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {

      const start = Math.max(this.currentPage - 2, 1);
      const end = Math.min(this.currentPage + 2, totalPages);

      if (start > 1) {
        pages.push(1);
        if (start > 2) {
          pages.push('...');
        }
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }

    return pages;
  }


  goToPage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChanged.emit(this.currentPage);
    }
  }


  previousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }


  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }
}