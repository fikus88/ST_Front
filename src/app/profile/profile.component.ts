import { Component, OnInit } from '@angular/core';

class User {
  name: string;
  gender: string;
  picture: string;
  picture_large: string;
  email: string;
  rating: number;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



 // usr : any = localStorage.getItem('profile');
  usr : User = JSON.parse(localStorage.getItem('profile'));
  constructor() { }

  ngOnInit() {
  }

}
