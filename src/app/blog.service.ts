import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { MOCKBLOGS } from './mock-blog';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
import { ConfigService } from './config.service';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  configUrl: Config;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.getConfig();
  }

  getConfig() {
    this.configService.getConfig().subscribe((data: Config) =>
      this.configUrl = {
        url: (data as any).baseUrl,
      })

    console.log("Config", this.configUrl)
  }



    getBlog(id: number | string): Observable<Blog> {

    let blog: Blog;
   
 
    

    const url = `${this.configUrl.url}/blog/${id}`;
    console.log('endtry point',url);
    return this.http.get<Blog>(url) as Observable<Blog>
    //  .subscribe((res) => {
    //    console.log(res)
    //   blog = res as Blog
    // })

    // console.log("after get blog", blog);
    // return of(blog);
  }

  getBlogs(): Observable<Blog[]> {
    return of(MOCKBLOGS);
  }


}
