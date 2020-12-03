import { Component, OnInit, } from '@angular/core';
import {Blog} from '../blog'
import {BlogService} from '../blog.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-all-blog',
  templateUrl: './page-all-blog.component.html',
  styleUrls: ['./page-all-blog.component.css']
})
export class PageAllBlogComponent implements OnInit {

  selectedBlog : Blog;
  blogs:Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  onSelect(blog:Blog): void{
    this.selectedBlog = blog;
  }

  getBlogs(){
    this.blogService.getBlogs().subscribe(blogs => this.blogs = blogs);
  }
}
