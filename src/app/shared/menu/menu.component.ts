import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports:[CommonModule],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() isOpen: boolean = false;
  @Output() toggleMenuEvent = new EventEmitter<void>(); 

  toggleMenu() {
    this.toggleMenuEvent.emit(); 
  }
}