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
  addressList: any
  buttonState : number = 0
  addressId:any
  bookId : any
  AddressId : any

  constructor( private bookService : BookService,private snackbar: MatSnackBar){}

  ngOnInit(): void {
    this.bookId =localStorage.getItem('bookId')
    
    this.getCart()
    this.getAddress()
  }

  openAddress(){
    this.buttonState = 1
  }
  openOrder(addressId:any){
    this.buttonState = 2
    localStorage.setItem('addressId',addressId)
    this.AddressId = localStorage.getItem('addressId')
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
      this.getCart()
      this.snackbar.open('book has been removed from cart', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition:'right'
      })
    })
  }

 getAddress(){
  this.bookService.getAddress().subscribe((response:any)=>{
    console.log(response.data)
    this.addressList = response.data
  })
 }

 addOrder(){
  let payload = {
    bookId : parseInt(this.bookId),
    addressId: parseInt(this.AddressId)
  }
  console.log('payload',payload)
  this.bookService.addOrder(payload).subscribe((response:any)=>{
    console.log(response)
    this.snackbar.open('book has been ordered sucessfully', '', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition:'right'
    })
  })
 }

}
