import { Component,OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderList : any

  constructor(private boosService : BookService){}
  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.boosService.getOrder().subscribe((response : any)=>{
      if(this.orderList ==null)
      {
        this.orderList == null
      }
      this.orderList = response.data
      console.log(response.data)
    })
  }

  getShortDate(date:any){
    return date.split('T')[0]
  }

}
