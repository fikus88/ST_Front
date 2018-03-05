import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Http} from "@angular/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AuthService, public router: Router, public http: Http) {}
}
