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
  public currentSource: string = ``;

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

  sourceList = [
    `abc-news`,
    `bbc-sport`,
    `argaam`,
    `axios`,
    `cbc-news`,
    `cbs-news`,
    `financial-post`,
    `espn`,
    `usa-today`,
    `the-economist`,
    `rt`,
    `reuters`
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

  onChangeCountryOrCategory() {
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      this.newsList = news['articles'];
    });
  }

  onChangeSource(source) {
    this.news.getNewsBySources(this.currentSource).subscribe(news => {
      this.newsList = news['articles'];
      this.currentCountry = ``;
      this.currentCategory = ``;
    });
  }
}
