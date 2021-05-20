import { Component, OnInit } from '@angular/core';
import {GifService} from '../gif.service';
import {Gifs} from '../gifs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  link = 'https://api.giphy.com/v1/gifs/search?api_key=Nh8dONvqjH7KYCIDU3bXnAmbMY94NeuZ&q=';

  // create a variable that will store an array returned from data.data
 gifs= [];
  constructor(public gifService: GifService, public http: HttpClient) {
this.getGif();
  }
  public getGif(){
    this.gifService.getTrendingGifs().subscribe(data=>{

      this.gifs=data["data"];
      // data.data returns an array that gets assigned to the variable created
       console.log(this.gifs);
    });
  }

// adding the search functionality through changing url, note you have to import httpclientmodule and add http to constructor
  performSearch(searchTerm: HTMLInputElement): void {
       var apiLink = this.link + searchTerm.value;

       this.http.get(apiLink).subscribe((res: Response) => {
                 this.gifs = res["data"];
                 console.log(this.gifs);
           });
}
  ngOnInit() {
  }

}