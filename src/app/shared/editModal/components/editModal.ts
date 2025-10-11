
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './editModal.html',
  imports:[CommonModule,ReactiveFormsModule],
  styleUrls: ['./editModal.css']
})
export class EditModalComponent implements OnInit {

userForm!:FormGroup
@Input() isOpen=false
@Input() userData:any
@Output() close=new EventEmitter<void>()
@Output()save=new EventEmitter()


ngOnInit(): void {
    this.userForm = new   FormGroup({
        firstName: new FormControl([this.userData?.firstName||'']),
        username: new FormControl([this.userData?.username||'']),
  
      });

    
}
closeModal(){
    this.close.emit()
}
onSubmit(){
    if(this.userForm.valid){
        this.save.emit(this.userForm.value)
        this.closeModal()
    }
}




}