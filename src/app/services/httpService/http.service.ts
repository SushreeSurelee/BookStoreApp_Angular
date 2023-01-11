import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl = 'https://bookstore.incubation.bridgelabz.com'

  constructor(private httpClient: HttpClient) { }

  postService(url: string, requestData: any, token: boolean = false, httpOptions: any) {
    return this.httpClient.post(this.baseurl + url, requestData, token && httpOptions);
  }
  
  getService(url: string,token: boolean = false, httpOptions: any) {
    return this.httpClient.get(this.baseurl+url,token && httpOptions)
  }

  putService() {

  }

  deleteService() {

  }

}
