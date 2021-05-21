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

 gifs= [];
  constructor(public gifService: GifService, public http: HttpClient) {
this.getGif();
  }
  public getGif(){
    this.gifService.getTrendingGifs().subscribe(data=>{

      this.gifs=data["data"];
       console.log(this.gifs);
    });
  }

  performSearch(searchTerm: HTMLInputElement): void {
       var apiLink = this.link + searchTerm.value;

       this.http.get(apiLink).subscribe((res: Response) => {
                 this.gifs = res["data"];
                 console.log(this.gifs);
           });
}
  ngOnInit() {
  }
  loadMore() {
    const gifsBox = document.querySelector('.images');

    fetch(
      'https://api.giphy.com/v1/gifs/trending?api_key=80bfcbf357864cd18518c324f47a7098'
    ).then((response) => response.json()).then((data) => {
        console.log(data);

        data.data.forEach(function (gif) {
          const img = document.createElement('img');
          img.src = gif.images.downsized.url;

          gifsBox.appendChild(img);
        });
      });

  }

}