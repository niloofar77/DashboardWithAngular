
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
import { addUser } from '../state/user.action';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchBarComponent, SortComponent, ModalComponent, PaginationComponent],
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
  


  constructor(private settingService: UserService,private route:ActivatedRoute, private store: Store<{ users: { users: User[] } }>) {}
  

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
  
}

//tamrin
// import { Component, OnInit } from '@angular/core';
// import { Store, select } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { User } from '../state/user.modal';
// import { loadUsers, addUser } from '../state/user.action';
// import { UserState } from '../state/user.reducer';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-user',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.css'],
//   imports:[FormsModule,CommonModule]
// })
// export class UserComponent implements OnInit {
//   users$: Observable<User[]>;
//   newUserName = '';
//   newUserEmail = '';
//   newUserRole = '';

//   constructor(private store: Store<{ users: UserState }>) {
//     this.users$ = store.pipe(select(state => state.users.users));
//   }

//   ngOnInit(): void {
//     this.store.dispatch(loadUsers());
//   }

//   addNewUser() {
//     if (!this.newUserName || !this.newUserEmail || !this.newUserRole) return;

//     this.store.dispatch(addUser({
//       user: {
//         id:13333,
//         name: this.newUserName,
//         email: this.newUserEmail,
//         role: this.newUserRole
//       }
//     }));

//     // پاک کردن فرم
//     this.newUserName = '';
//     this.newUserEmail = '';
//     this.newUserRole = '';
//   }
// }
