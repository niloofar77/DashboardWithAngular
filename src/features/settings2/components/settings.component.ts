import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from '../services/settings.services';
import { ModalComponent } from '../../../app/shared/modal/modal.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  message: string = "عکس با موفقیت عوض شد";
  showModal: boolean = false;
  previewUrl: string | ArrayBuffer | null = null;

  avatarForm = new FormGroup({
    file: new FormControl<File | null>(null)
  });

  constructor(private settingsService: SettingsService) {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;

    if (file) {
      
      this.avatarForm.patchValue({ file });
      this.avatarForm.get('file')?.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => (this.previewUrl = reader.result);
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    const file = this.avatarForm.get('file')?.value;

    if (!file) {
      console.warn('No file selected!');
      return;
    }

    if (!(file instanceof Blob)) {
      console.error('Invalid file type');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      this.settingsService.updateAvatar(url);
      this.showModal = true;
    };
    reader.readAsDataURL(file);
  }
  closeModal(){
    this.showModal=false
  }
}
