
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(public http: HttpClient) {
   }
    getTrendingGifs(){
     return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=Nh8dONvqjH7KYCIDU3bXnAmbMY94NeuZ')
   }


}