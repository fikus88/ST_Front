/**
 * Created by Lukasz on 10/05/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Object } from '../models/SerialModel'
import { Sensitive } from '../../../Sensitive'

let _Sens: Sensitive = new Sensitive();
@Injectable()


export class SearchService {
  constructor ( private http: Http ) {}


Service_search(searchPhrase : string){
  let headers = new Headers();
  this.createAuthorizationHeader(headers, searchPhrase);
  return this.http.get('http://localhost:8080/serial-api/logged/search',
    {headers : headers })
    .map(res => <Object[]> res.json())
    .do(res => console.log(res));
}
  createAuthorizationHeader(headers: Headers, searchVal: string) {
    headers.append('x-access-token', _Sens.APISecret);
    headers.append('searchPhrase', searchVal);

  }

  }
