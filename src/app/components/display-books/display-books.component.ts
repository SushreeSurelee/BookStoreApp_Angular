import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit{

  @Input() booksList :any
  book : any

  ngOnInit(): void {

  }

  quickView(bookId:any){
    localStorage.setItem('bookId',bookId)
    
  }
  
  PriceLowToHigh(){
    this.booksList = this.booksList.sort((low: any, high: any) => low.discountPrice - high.discountPrice);
  }

  PriceHighToLow(){ 
    this.booksList = this.booksList.sort((low: any, high: any) => high.discountPrice - low.discountPrice);
  }

  newestFirst(){
    this.booksList = this.booksList.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
}
