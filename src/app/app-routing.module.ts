import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoginComponent } from './page-login/page-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes=[
  {path:'login',component:PageLoginComponent},
  {path: '', redirectTo: '/blog-all', pathMatch: 'full'},
  {path:'**', component:PageNotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
     ),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
