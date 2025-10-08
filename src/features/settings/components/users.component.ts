
import { Component, inject, OnInit, signal } from '@angular/core';
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
import { addUser, deleteUser } from '../state/user.action';


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
  private store=inject(Store<{users:{users:User[]}}>)
  onAdd(){
    const newUser: User = { id: Date.now(), name: "ک,", email: 'new@user.com',role:"admin" };
    this.store.dispatch(addUser({user:newUser}))
    console.log("added")

  }  
  onDelete(userId:number){
    this.store.dispatch(deleteUser({userId}))
    console.log("deleted")

  }


  constructor(private settingService: UserService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.store.select('users').subscribe((state) => {
      this.usersData = state.users; 
    });
    this.fetchUsers();
    // this.route.data.subscribe((data) => {
    //   this.usersData = data['users'].body?.users || []; 
    //   this.totalItems =  data['users'].body.total; 
    // });
  }
  
  

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
  // fetchUsers() {
  //   this.settingService.getAllUsers(this.currentPage, this.pagesize).subscribe((response: any) => {
  //     this.usersData = response.body.users;
  //     this.totalItems = response.body.total; 
      
  //   });
  // // }
  fetchUsers() {
    this.settingService.getAllUsers(this.currentPage, this.pagesize).subscribe((response: any) => {
      const users = response.body.users;
      this.totalItems = response.body.total;
      users.forEach(user => this.store.dispatch(addUser({ user })));
    });
  }
  

  // deleteUser(userId: number) {
  //   this.showModal.set(true)
  //   this.settingService.deleteUser(userId).subscribe({
  //     next: (res) => {
    
  //       this.usersData = this.usersData.filter(user => user.id !== userId);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }
  closeModal(){
    this.showModal.set(false)
  }
  currentPage: number = 1;
  onPageChanged(newPage: number) {
    this.currentPage = newPage;
    this.fetchUsers(); 
  }
  
}