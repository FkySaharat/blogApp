import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';
import { observable, Observable } from 'rxjs';
import { createBehaviorSubject } from 'src/lib/helpers/observable-helper';


@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {

  blog$: Observable<Blog>;
  blog: Blog;

  constructor(private route: ActivatedRoute,private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlog();
  }
  get loading() {
    return createBehaviorSubject(this.blogService.loading$).value;
  }
  getBlog(){
    const id = +this.route.snapshot.paramMap.get('id') as number;
    this.blogService.loading$.next(false);
    this.blogService.getBlog$(id).subscribe( (blog: Blog) => {
      this.blog = blog;
      this.blogService.loading$.next(true);
    });
  }
}
