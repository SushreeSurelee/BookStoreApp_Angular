import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartlist : any

  constructor( private bookService : BookService,private snackbar: MatSnackBar){}

  ngOnInit(): void {
    this.getCart()
  }



  getCart(){
    this.bookService.getCart().subscribe((response : any)=>{
      console.log(response.data)
      this.cartlist = response.data
    })
  }

  removeFromCart(cartId:any){
    this.bookService.deleteCart(cartId).subscribe((response:any)=>{
      console.log(response)
      this.snackbar.open('book has been removed from cart', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'right'
      })
    })
  }

}
