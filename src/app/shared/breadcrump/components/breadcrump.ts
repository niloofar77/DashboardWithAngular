import { Component } from '@angular/core';
import { BreadcrumbService } from '../services/breadcrump.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrump.html',
  styleUrls: ['./breadcrump.css'],
  imports:[RouterLink,CommonModule]
})
export class BreadcrumbComponent {
  constructor(public breadcrumbService: BreadcrumbService) {}
}
