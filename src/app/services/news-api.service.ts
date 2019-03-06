import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key: string = environment.news_api.api_key;

  constructor(
    private http: HttpClient
  ) { }

  getNewsByCountryAndCategory(country, category) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.api_key}`);
  }

  getNewsBySources(source) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${this.api_key}`);
  }
}
