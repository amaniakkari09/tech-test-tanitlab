import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor() {
  }

  ngOnInit(): void {
  this.handleDetails();
  this.user = JSON.parse(localStorage.getItem('USER_DETAIL') || "null");
  
  }
 // store user detail in local storage 
  handleDetails() {
    localStorage.setItem('USER_DETAIL', JSON.stringify(history.state[0]));
  }
}
