import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public newsList;
  public currentCategory: string = 'technology';
  public currentCountry: string = 'ru';
  categoryList = [
  `business`, 
  `entertainment`, 
  `health`, 
  `science`, 
  `sports`, 
  `technology`
  ];

  countryList = [
    `ua`,
    `ru`,
    `us`,
    `ng`,
    `ch`
  ]

  constructor(
    private news: NewsApiService
  ) { }

  ngOnInit() {
    // get news
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      this.newsList = news['articles'];
    });
  }

  onChange() {
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      this.newsList = news['articles'];
    });
  }

}
