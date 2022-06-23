import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: string;
  user: User;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
   // store user detail in local storage 
    if (history.state) {
      this.user = history.state[0];
      localStorage.setItem('USER_DETAIL', JSON.stringify(history.state[0]));
      this.user = JSON.parse(localStorage.getItem("USER_DETAIL") || '{}');
    }
  }

  ngOnInit(): void {

  }

}
