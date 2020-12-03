import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlog();
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
        },
        error: err => { console.log(err) }
      }

    );
  }
}
