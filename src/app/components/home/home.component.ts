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
  public currentCountry: string = 'us';
  public currentSource: string = ``;

  categoryList = [
    `general`,
    `business`, 
    `entertainment`, 
    `health`, 
    `science`, 
    `sports`, 
    `technology`
  ];

  countryList = [
    `us`,
    `ua`,
    `ru`,
    `ng`,
    `ch`,
    `gb`,
    `ca`,
    `fr`,
    `it`,
    `de`,
    `jp`,
    `ar`
  ]

  sourceList = []

  constructor(
    private news: NewsApiService
  ) { }

  ngOnInit() {
    // get news
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      this.newsList = news['articles'];
    });

    // get all sources
    this.news.getSourcesByCountry(this.currentCountry, this.currentCategory).subscribe(data => {
      if (data[`sources`].length) {
        this.sourceList = data[`sources`];
        this.currentSource = this.sourceList[0];
      }
    });
  }

  onChangeCountryOrCategory() {
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      this.newsList = news['articles'];
    });

    this.news.getSourcesByCountry(this.currentCountry, this.currentCategory).subscribe(data => {
      if (data[`sources`].length) {
        this.sourceList = data[`sources`];
        this.currentSource = this.sourceList[0];
      } else {
        this.sourceList = [];
        this.currentSource = ``;
      }
    });
  }

  onChangeSource(source) {
    this.news.getNewsBySources(this.currentSource).subscribe(news => {
      this.newsList = news['articles'];
    });
  }
}
