import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { MOCKBLOGS } from './mock-blog';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  configUrl: Config;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.configService.getConfig().subscribe((data: Config) => this.configUrl = {
      url: (data as any).baseUrl,
    })

    console.log(this.configUrl)
  }


  async getBlog(id: number | string): Promise<Observable<Blog>> {

    let blog: Blog;

    // const blog= MOCKBLOGS.find((blog) =>
    //   blog.id == id
    // );


    const url = `http://localhost:3000/blog/${id}`;
    console.log(this.configUrl);
    await this.http.get(`http://localhost:3000/blog/${id}`).subscribe((res) =>{
    console.log('aaaaaaaaaaaaaa',res)  
    blog = res as Blog
    })

    console.log("dfdfdfdddddd", blog);
    return of(blog);
  }

  getBlogs(): Observable<Blog[]> {
    return of(MOCKBLOGS);
  }


}
