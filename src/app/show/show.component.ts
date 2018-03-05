import { Component, OnInit } from '@angular/core';
import { Object } from '../models/SerialModel';
import {SharedDataService} from "../services/sharedData.service";
import {ActivatedRoute} from "@angular/router";
import {showPipe} from "./showPipe";
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
    providers: [showPipe]
})
export class ShowComponent implements OnInit {
    AllSearchedShows: Object[];
    Show: Object;
    id: number;
    sub: any;

  constructor(private shared: SharedDataService, private route : ActivatedRoute, private s: showPipe) { }



  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          this.id = +params['id'];

          this.shared.subscribe(shows => this.AllSearchedShows = shows);

          this.Show =  this.s.transform(this.AllSearchedShows,this.id);
          console.log(this.Show)
      });


  }

}
