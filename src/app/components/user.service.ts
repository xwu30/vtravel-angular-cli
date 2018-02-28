import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserOrderService{
    constructor(private http: Http) {}
    submitOrder(userOrder:any){
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://vtravel-a6330.firebaseio.com/data.json',
        userOrder,
        {headers: headers});
    }

    // storeServers(servers: any[]) {
    //     const headers = new Headers({'Content-Type': 'application/json'});
    //     // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //     //   servers,
    //     //   {headers: headers});
    //     return this.http.put('https://vtravel-a6330.firebaseio.com/data.json',
    //       servers,
    //       {headers: headers});
    //   }
    // getOrders() {
    //     return this.http.get('https://udemy-ng-http.firebaseio.com/data')
    //       .map(
    //         (response: Response) => {
    //           const data = response.json();
    //           for (const order of data) {
    //             console.log(order);
    //           }
    //           return data;
    //         }
    //       )
    //       .catch(
    //         (error: Response) => {
    //           return Observable.throw('Something went wrong');
    //         }
    //       );
    //   }
      getOrder() {
        return this.http.get('https://vtravel-a6330.firebaseio.com/data.json')
          .map(
            (response: Response) => {
              return response.json();
            }
          );
      }
}