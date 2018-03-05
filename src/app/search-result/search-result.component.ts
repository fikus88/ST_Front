import {Component, OnInit, Input, OnChanges, Pipe} from '@angular/core';
import {SharedDataService} from "../services/sharedData.service";
import {Object}  from "../models/SerialModel"
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})


export class SearchResultComponent implements OnInit, OnChanges {

SearchResult: Object[];

  constructor( private shared: SharedDataService, private router: Router) { }



  SelectShow(id: number) {
    this.router.navigate(["/show", id])
  }


  ngOnChanges() {
 //   this.shared.subscribe(result => this.SearchResult = result);
  //  console.log(this.SearchResult)

  }
  ngOnInit() {
   this.shared.subscribe(result => this.SearchResult = result);
  }

}
