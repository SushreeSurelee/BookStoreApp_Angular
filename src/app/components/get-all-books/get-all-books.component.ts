import { Component,OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit  {

  bookArray = []

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    this.bookService.getAllBooks().subscribe((response : any)=>{
      this.bookArray = response.data
      console.log('All Books details',response)
    })
  }
}
