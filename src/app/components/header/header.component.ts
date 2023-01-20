import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router : Router){}
  Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('bookId');
    localStorage.removeItem('addressId');
    this.router.navigateByUrl("/login")
  }

}
