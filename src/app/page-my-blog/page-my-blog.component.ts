import { Component, OnInit } from '@angular/core';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-my-blog',
  templateUrl: './page-my-blog.component.html',
  styleUrls: ['./page-my-blog.component.css']
})
export class PageMyBlogComponent implements OnInit {


  blog:Blog;

  constructor(private blogService:BlogService,private route:ActivatedRoute) {
    
   }

  ngOnInit(): void {

  }

}
