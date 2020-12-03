import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { PageAllBlogComponent } from './page-all-blog/page-all-blog.component';
import { PageMyBlogComponent } from './page-my-blog/page-my-blog.component';
import { PageThisBlogComponent } from './page-this-blog/page-this-blog.component';
import { CardBlogComponent } from './card-blog/card-blog.component';

import { MarkdownBlogComponent } from './markdown-blog/markdown-blog.component';
import { PageAddBlogComponent } from './page-add-blog/page-add-blog.component';
import { PageDetailBlogComponent } from './page-detail-blog/detail-blog.component';


@NgModule({
  declarations: [
    PageAllBlogComponent,
    PageMyBlogComponent,
    PageThisBlogComponent,
    CardBlogComponent,
    PageDetailBlogComponent,
    MarkdownBlogComponent,
    PageAddBlogComponent,
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
