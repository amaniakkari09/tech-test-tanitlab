import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  userList: User[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  userDetail: User[] ;

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.getUsersList();
  }
// get list of users
  getUsersList() {
    this.userService.getListOfUsers().subscribe((data: any) => {
      this.userList = data;
    })
  }
  //Pagination
  onTableDataChange(event: any) {
    this.page = event;
    this.getUsersList();
  }
    //Pagination
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUsersList();
  }
  //filter by name or username
  applyFilter(event: Event) {
    let filterUsers = []
    let filterValue = (event.target as HTMLInputElement).value;
    filterUsers = this.userList.filter(e => e.username.toLocaleLowerCase() == filterValue.toLocaleLowerCase() || e.name.toLocaleLowerCase() == filterValue.toLocaleLowerCase());
    if (filterUsers.length > 0) {
      this.userList = filterUsers;
    }
    if (filterValue == '') {
      this.getUsersList();
    }
  }
// send data with the url 
  getUserDetail(userId:number){
    this.userDetail = this.userList.filter(e => e.id == userId)
    this.router.navigateByUrl('user-detail/' + userId ,{ state: this.userDetail});
  }
}

