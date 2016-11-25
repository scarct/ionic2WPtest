import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WordpressService {
  data1: any;
  hadIceCream: boolean = false;
  constructor(public http: Http) {
    console.log('Hello WordpressService Provider');
  }
  getIceCream() {
    this.hadIceCream = true;
    return 'mmm... ice cream';
  }


  /*load() {
    if (this.data1) {
      //already loaded data
      return Promise.resolve(this.data1);
    }
    //don't have the data yet
    return new Promise(resolve => {
      //we are using Angular Http provider to request the data,
      //then on a response, it'll map the JSON data to parsed JS object
      //next, we process the data and resolve the promise with the new data.
      this.http.get('http://localhost:61588/wp-json/wp/v2/posts')
        .map(res => res.json())
        .subscribe(data => {
          //we've got the raw data, now generate the core schedule data and save the data for later reference
          this.data1 = data.results;
          resolve(this.data1);
        });
    }
    )
  }
*/

}
