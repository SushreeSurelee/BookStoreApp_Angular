import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  token :any
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
   }

  getAllBooks(){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.getService("/Book/GetBooks",false,header)
  }

  getBookById(bookId:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService(`/Book/GetBookbyID?bookId=${bookId}`,true,header)
  }


}
