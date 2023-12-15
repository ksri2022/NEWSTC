import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http: HttpClient ) { }

  //Top headlines API URL
  topHeadlinesNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=5a3beca443bd4887bf6c0b1349e7c05c';

  //Tech News
  techNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=5a3beca443bd4887bf6c0b1349e7c05c';

  //Business News
  businessNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5a3beca443bd4887bf6c0b1349e7c05c';


  //for Bussiness Logic

  TcBuzzNews(): Observable<any>{
    return this._http.get(this.businessNews);
  }


  TctechNews(): Observable<any>{
    return this._http.get(this.techNews);
  }


   tcHeadlines(): Observable<any>{
    return this._http.get(this.topHeadlinesNews);
  }



}
