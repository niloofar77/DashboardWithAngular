
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchBarComponent } from '../../../app/shared/searchbar/searchbar';
import { SortComponent } from "../../../app/shared/sort/sort.component";
import { ModalComponent } from '../../../app/shared/modal/modal.component';
import { PaginationComponent } from "../../../app/shared/pagination/pagination.component";


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchBarComponent, SortComponent, ModalComponent, PaginationComponent],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent  {
}