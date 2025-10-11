
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './addModal.html',
  imports:[CommonModule,ReactiveFormsModule],
  styleUrls: ['./addModal.css']
})
export class AddModalComponent implements OnInit {

userForm!:FormGroup
@Input() isOpen=false
@Input() userData:any
@Output() close=new EventEmitter<void>()
@Output()save=new EventEmitter()


ngOnInit(): void {
    this.userForm = new   FormGroup({
        firstName: new FormControl(''),
        username: new FormControl(''),
        email:new FormControl('')
  
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