import {Component, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import {SearchService} from "../services/search.service";
import { Input } from '@angular/core'
import { Router } from '@angular/router'
import {SharedDataService} from "../services/sharedData.service";
import { Object } from '../models/SerialModel'
import {deserialize} from "json-typescript-mapper";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnChanges {


  result_arr : Object[];
  constructor( private searchService: SearchService, private router: Router, private shared : SharedDataService) { }




  OnSearch(val:string)  {

    this.searchService.Service_search(val).subscribe(data => this.result_arr = data);

    this.shared.next(this.result_arr);
    this.router.navigateByUrl('/search');
  }

  ngOnChanges() {


}



}
