import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {

  blog:Blog;

  constructor(private route: ActivatedRoute,private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlog();
  }

  async getBlog(){
    const id = +this.route.snapshot.paramMap.get('id') as number;
    (await this.blogService.getBlog(id)).subscribe(blog=>this.blog =blog);
  }
}
