
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(public http: HttpClient) {
   }
    getTrendingGifs(){
     return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=d4OHgDtQs5eAhJni66DKFY7JQDI8y72n')
   }


}