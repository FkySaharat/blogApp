import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { MOCKBLOGS } from './mock-blog';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
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
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.configService.getConfig().subscribe((data: Config) => this.configUrl = {
      url: (data as any).baseUrl,
    })

    console.log(this.configUrl);
  }

  getBlog$(id: number): Observable<Blog> {
    const url = `http://localhost:3000/blog/${id}`;
    return this.http.get<Blog>(url);
  }

  getBlogs$(): Observable<Blog[]> {
    return of(MOCKBLOGS);
  }


}
