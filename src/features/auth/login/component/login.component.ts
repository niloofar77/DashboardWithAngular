import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ModalComponent } from '../../../../app/shared/modal/modal.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,ModalComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  showModel = signal<boolean>(false);
  isSuccess = signal<boolean>(true);
  alertMessage = signal<string>('');
  typeModal = signal<'success' | 'error' | 'warning' | 'info'>('success');
  showPassWord=signal<boolean>(false);
  showError=signal<boolean>(false);

  constructor(private fb: FormBuilder,private authService:AuthService, private router:Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: [
        '',
        [Validators.maxLength(11)],
      ],
    });
  }


  onSubmit() {

    const payload=this.loginForm.value
  //   if (this.loginForm.valid) {
  //     this.authService.setToken(username,password)
  //     this.authService.setRole("Admin")

   
  //   this.loginForm.reset();
  // }

  if((this.loginForm.valid)){
    this.authService.login(payload).subscribe({
      next:(res)=>{
        this.router.navigate(["/"])
        localStorage.setItem("refreshToken",res.refreshToken);
        localStorage.setItem("accessToken",res.accessToken)
  
        
      },
      error:()=>{
          this.showError.set(true)
      }
    }
     
    
    )
  }

}
changeVisibility(){
  this.showPassWord.set(!this.showPassWord())
  
}
  get f() {
    return this.loginForm.controls;
  }
  closeModal(){
    
    this.showError.set(false)

  }
}
