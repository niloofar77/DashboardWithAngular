import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../../../app/shared/searchbar/searchbar';
import { SortComponent } from "../../../app/shared/sort/sort.component";
import { ModalComponent } from '../../../app/shared/modal/modal.component';
import { PaginationComponent } from "../../../app/shared/pagination/pagination.component";
import { UserService } from '../services/user.services';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../state/user.modal';
import { EditModalComponent } from '../../../app/shared/editModal/components/editModal';
import { AddModalComponent } from '../../../app/shared/addModal/components/addModal';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchBarComponent, SortComponent, ModalComponent, PaginationComponent, EditModalComponent, AddModalComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {
  usersData: any[] = [];
  filteredItems:any[]=[]
  searchQuery: string = '';
  sortDirection: 'asc' | 'desc' | null = null;
  showModal=signal<boolean>(false)
  message:string="با موفقیت حذف شد!"
  pagesize:number=10;
  totalItems:number=10
  showEdit:boolean=false
  selectedUser: any = null;
  showAdd:boolean=false;
  userData:any=""



  constructor(private settingService: UserService) {}
  

  ngOnInit(): void {
    this.fetchUsers();
    // this.route.data.subscribe((data) => {
    //   this.usersData = data['users'].body?.users || []; 
    // });
  }
  // onAdd() {
  //   const newUser = {
  //     id:121,
  //   name:"nnnnnnn",
  //    email:"sn.mousavui77@gmail.com",
  //    role:"admin"
  //   };
  
  //   this.store.dispatch(addUser({ user: newUser }));
  // }
  

  // onSearch(searchQuery:string){
  //   this.searchTerm=searchQuery
  //  this.filteredAndSortedUsers.map((user:any)=>{
  //   user.firstName.toLowerCase()===searchQuery.toLocaleLowerCase
  //  })
   


  // }

  onSort() {
    if (this.sortDirection === null) {
      this.sortDirection = 'asc';
    } else if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = null; 
    }
  }
  

    get filteredAndSortedUsers() {

    let filtered = this.usersData.filter(item =>
      item.firstName?.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    console.log("aaaaaaaaaa")


    if (this.sortDirection) {
      filtered = [...filtered].sort((a, b) => {
        if (a.id < b.id) return this.sortDirection === 'desc' ? -1 : 1;
        if (a.id > b.id) return this.sortDirection === 'desc' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }


  onSearchChanged(query: string) {
    this.searchQuery=query.trim()

      this.filteredAndSortedUsers.map((user:any)=>{
      user.firstName.toLowerCase()===query.toLocaleLowerCase
  })


  }
  fetchUsers() {
    this.settingService.getAllUsers(this.currentPage, this.pagesize).subscribe((response: any) => {
      this.usersData = response.body.users;
      this.totalItems = response.body.total; 
      
    });
  }


  deleteUser(userId: number) {
    this.showModal.set(true)
    this.settingService.deleteUser(userId).subscribe({
      next: (res) => {
        this.usersData = this.usersData.filter(user => user.id !== userId);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  closeModal(){
    this.showModal.set(false)
  }
  currentPage: number = 1;
  onPageChanged(newPage: number) {
    this.currentPage = newPage;
    this.fetchUsers(); 
  }

  editUser(userId: number) {
    const foundUser = this.usersData.find(u => u.id === userId);
    if (foundUser) {
      this.selectedUser = { ...foundUser };
      this.showEdit = true;
    }
  }
  
  saveUserEdits(updatedUser: any) {
    if (!this.selectedUser) return;
  
    const payload = { ...this.selectedUser, ...updatedUser };
    this.settingService.updateUser(this.selectedUser.id,payload).subscribe({
      next: (res: any) => {
        this.usersData = this.usersData.map(u => u.id === res.id ? res : u);
        this.showEdit = false;
      },
      error: (err) => console.error(err)
    });
  }

  addUser(user: any) {
    console.log("Addd a user")
    this.settingService.createUser(user).subscribe({
      next: (res: any) => {
        this.usersData = [...this.usersData, res];
        this.showEdit = false;
      },
      error: (err) => {
        console.error(err);
        this.showEdit = false;
      }
    });
  }







}
