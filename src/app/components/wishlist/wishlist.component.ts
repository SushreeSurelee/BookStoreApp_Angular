import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit  {
  wishlist :any

  constructor(private bookService: BookService,private snackbar : MatSnackBar){}

  ngOnInit(): void {
    this.getWishlist()
  }

  getWishlist(){
    this.bookService.getAllWishlist().subscribe((response : any)=>{
      console.log(response.data)
      this.wishlist = response.data
    })
  }

  deleteWishItem(wishlistId:any){
    this.bookService.deleteWishlistItem(wishlistId).subscribe((response : any) =>
    {
      this.snackbar.open('book has been removed from wishlist', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'center'
      })
    })
    this.getWishlist();
  }
  

}
