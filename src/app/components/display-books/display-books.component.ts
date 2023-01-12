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
  

}
