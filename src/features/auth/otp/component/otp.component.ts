import { Component, input, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  imports: [ReactiveFormsModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent {
  loginForm: FormGroup;
  showModel = signal<boolean>(false);
  isSuccess = signal<boolean>(true);
  alertMessage = signal<string>('');
  typeModal = signal<'success' | 'error' | 'warning' | 'info'>('success');

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      input1: ['', [Validators.required]],
      input2: [
        '',
        [Validators.maxLength(11)],
      ],
      input3: ['', [Validators.required]],
      input4: ['', [Validators.required]]
    });
  }


  onSubmit() {
     const {input1,input2,input3,input4}=this.loginForm.value
     if (input1 === "1" && input2 === "1" && input3 === "1" && input4 === "1") {
      console.log("success");
    }
    else{
      console.log("error")
    }

  }
  get f() {
    return this.loginForm.controls;
  }
}
