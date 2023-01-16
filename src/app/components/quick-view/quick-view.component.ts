import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  book:any;
  bookId : any;

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId')
    this.getBookById();
  }

  getBookById(){
    this.bookService.getBookById(this.bookId).subscribe((response:any)=>{
      console.log('quick view of book',response.data)
      this.book = response.data;
    })
  }
  addToWishlist(){
    let payload ={
      bookId : this.book.bookId
    }
    this.bookService.addToWishlist(payload,this.bookId).subscribe((response:any)=>{
      console.log(response)
    })
  }
}
