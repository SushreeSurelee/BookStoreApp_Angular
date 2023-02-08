import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  books:any;
  bookId : any;
  feedbackList: any
  addToBag :boolean = true
  ratingPoint:any=0
  comment : any
  
  constructor(private bookService: BookService, private snackbar : MatSnackBar){}

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId')
    this.getBookById();
    this.getFeedback(this.bookId);
  }

  getBookById(){
    this.bookService.getBookById(this.bookId).subscribe((response:any)=>{
      console.log('quick view of book',response.data)
      this.books = response.data;
    })
  }
  addToWishlist(){
    let payload ={
      bookId : this.books.bookId
    }
    this.bookService.addToWishlist(payload,this.bookId).subscribe((response:any)=>{
      this.snackbar.open('book has been added to wishlist', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'center'
      })
    })
  }
  addToCart(){
    let payload = {
      bookId : this.books.bookId,
      cartQuantity : 1
    }
    this.addToBag = false
    this.bookService.addToCart(payload).subscribe((response : any)=>{
      console.log(response)
      this.snackbar.open('book has been added to cart', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'center'
      })
    })
  }

  addFeedback(){
    let payload = {
      bookRating : parseInt(this.ratingPoint),
      comment : this.comment,
      bookId : this.books.bookId
    }
    this.bookService.addFeedback(payload).subscribe((response : any)=>{
      console.log(response)
      this.getFeedback(this.bookId)
      this.snackbar.open('Your feedback is added', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'center'
      })
    })
    this.comment='';
    this.ratingPoint=0;
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
