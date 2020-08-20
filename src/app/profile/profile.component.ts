import { Component, OnInit } from '@angular/core';
import { TokenService } from '../Services/token.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  constructor(private token: TokenService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
}
