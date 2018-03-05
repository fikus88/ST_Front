/**
 * Created by Lukasz on 10/05/2017.
 */
import { Injectable, EventEmitter } from '@angular/core';
import {ReplaySubject} from "rxjs";


@Injectable()
export class SharedDataService extends ReplaySubject<any> {

  constructor() {
    super();
  }
}
