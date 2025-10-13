import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.html',
  styleUrls: ['./datepicker.css'],
  imports:[ReactiveFormsModule,NgPersianDatepickerModule]
})

export class DatePickerComponent {
    dateValue = new FormControl();


}
