import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  book:any;
  bookId : any;
  feedbackList: any

  constructor(private bookService: BookService, private snackbar : MatSnackBar){}

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId')
    this.getBookById();
    this.getFeedback(this.bookId);
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
      this.snackbar.open('book has been added to wishlist', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'right'
      })
    })
  }
  addToCart(){
    let payload = {
      bookId : this.book.bookId,
      cartQuantity : 1
    }
    this.bookService.addToCart(payload).subscribe((response : any)=>{
      console.log(response)
      this.snackbar.open('book has been added to cart', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'right'
      })
    })
  }

  getFeedback(bookId:any){
    this.bookService.getFeedback(bookId).subscribe((response : any)=>{
      console.log(response)
      this.feedbackList = response.data
    })
  }

  getShortName(name:any){
    return name.split(' ').map((n:any) => n[0]).join('');
  }
}
