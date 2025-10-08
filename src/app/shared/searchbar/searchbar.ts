
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './searchbar.html',
  imports: [CommonModule, FormsModule],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Input() searchQuery: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  private searchSubject = new Subject<string>();
  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.searchSubject
      .pipe(
        debounceTime(400),        
     
        distinctUntilChanged()  

      )
      .subscribe(query => {
        this.searchEvent.emit(query);
        
      });
  }

  onSearch() {
    this.searchSubject.next(this.searchQuery);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
