import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageAllBlogComponent } from './page-all-blog/page-all-blog.component';
import { PageMyBlogComponent } from './page-my-blog/page-my-blog.component';
import { PageThisBlogComponent } from './page-this-blog/page-this-blog.component';
import { CardBlogComponent } from './card-blog/card-blog.component';

import { RouterModule , Routes} from '@angular/router';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';

import { HttpClientModule } from '@angular/common/http';
import { MarkdownBlogComponent } from './markdown-blog/markdown-blog.component';
import { PageAddBlogComponent } from './page-add-blog/page-add-blog.component';

const appRoutes: Routes=[
  {path:'blog-all',component:PageAllBlogComponent},
  {path:'blog-my',component:PageMyBlogComponent},
  {path:'blog-this',component:PageThisBlogComponent},
  {path:'blog-detial/:id',component:DetailBlogComponent},
  {path:'blog-adding',component:PageAddBlogComponent},
  {path: '', redirectTo: '/blog-all', pathMatch: 'full'},
  {path:'**', component:PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageAllBlogComponent,
    PageMyBlogComponent,
    PageThisBlogComponent,
    CardBlogComponent,
    DetailBlogComponent,
    MarkdownBlogComponent,
    PageAddBlogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
    ),
    NgbNavModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
