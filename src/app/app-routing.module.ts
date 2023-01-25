import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { RegisterComponent } from './components/register/register.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AuthenticationGuard } from './authentication.guard';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path:'', redirectTo:"/login",pathMatch:'full'},
  {path:'signup',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
children:[
  {path: 'books', component:GetAllBooksComponent},
  {path: 'quick-view', component:QuickViewComponent},
  {path: 'wishlist', component:WishlistComponent},
  {path: 'cart', component:CartComponent},
  {path: 'order-placed', component:OrderPlacedComponent},
  {path: 'my-orders', component:OrdersComponent},
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
