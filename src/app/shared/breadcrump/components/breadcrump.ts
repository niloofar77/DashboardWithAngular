import { Component } from '@angular/core';
import { BreadcrumbService } from '../services/breadcrump.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../layouts/main/service/langService';
import { TranslatePipe } from '../../../layouts/main/service/translate';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrump.html',
  styleUrls: ['./breadcrump.css'],
  imports:[RouterLink,CommonModule,TranslatePipe]
})
export class BreadcrumbComponent {
  constructor(public breadcrumbService: BreadcrumbService,private langService:TranslationService) {}


  translate(key:string):string{
     return this.langService.translate(key)
  }
}
