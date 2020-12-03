import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAllBlogComponent } from './page-all-blog/page-all-blog.component';
import { PageMyBlogComponent } from './page-my-blog/page-my-blog.component';
import { PageThisBlogComponent } from './page-this-blog/page-this-blog.component';

import { PageAddBlogComponent } from './page-add-blog/page-add-blog.component';
import { PageDetailBlogComponent } from './page-detail-blog/detail-blog.component';

const blogRoutes: Routes = [
  {
    path: 'blog',
    children: [
      { path: 'blogs-all', component: PageAllBlogComponent },
      { path: 'blogs-my', component: PageMyBlogComponent },
      {
        path: 'blog-detial',
        children: [
          { path: ':id', component: PageDetailBlogComponent, }
        ]
      },
      { path: 'blog-adding', component: PageAddBlogComponent },
      { path: '**', redirectTo: 'blogs-all' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(blogRoutes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
