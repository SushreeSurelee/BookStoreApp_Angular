import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:"/login",pathMatch:'full'},
  {path:'signup',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
children:[
  {path: 'books', component:GetAllBooksComponent},
  {path: 'quick-view', component:QuickViewComponent},
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
