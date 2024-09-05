import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SingupComponent } from './singup/singup.component';

export const routes: Routes = [

  { path: 'homepage', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contant', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'singup', component: SingupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]})
  
  export class AppRoutingModule{}
 