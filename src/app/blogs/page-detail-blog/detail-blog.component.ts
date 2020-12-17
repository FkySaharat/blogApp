import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})

export class PageDetailBlogComponent implements OnInit {

  blog$: Observable<Blog>;
  blog: Blog;
  status: string;

  //ActivedRoute provides access to infomation about a route ex. snapshot, params, url
  constructor(private route: ActivatedRoute,private router: Router,private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlog();
    console.log("Detail block")
  }

  async getBlog() {
    const id = +this.route.snapshot.paramMap.get('id') as number;
    (await this.blogService.getBlog(id)).subscribe(
      {
        complete: () => { console.log("load is success") },
        next: (res) => {
          console.log("Component", res.body)
          this.blog = res.body as Blog;
          this.status =res.status;
          console.log(this.status);

          // add /n/n
        },
        error: err => { console.log(err) }
      }

    );
  }

  gotoblogs(){
    this.router.navigate(['blog/blog-all'])
  }
}
