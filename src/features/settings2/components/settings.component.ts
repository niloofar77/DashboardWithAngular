
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from '../services/settings.services';



@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent  {
  avatarForm!:FormGroup
  avatarImage=new FormGroup({
    fileAvatar:new FormControl(null)
    }
  )


  constructor(private settingsService:SettingsService){

  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const url = reader.result as string;
        this.settingsService.updateAvatar(url); 
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit(){
   
    console.log('File uploaded:', this.avatarImage.value.fileAvatar);

  }

}