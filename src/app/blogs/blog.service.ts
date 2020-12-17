import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { MOCKBLOGS } from './mock-blog';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Config } from '../config';
import { ConfigService } from '../config.service';
import { resolve } from 'url';
import { options } from 'marked';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  configUrl: Config;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.getConfig();
  }

  getConfig() {

    return new Promise((resolve) => {
      this.configService.getConfig().subscribe((data: Config) => {

        this.configUrl = {
          url: (data as any).baseUrl,
        }
        console.log("Config", this.configUrl)
        if (this.configUrl != undefined) {
          resolve()
        }
      })
    })
  }

  async addNewBlog(newBlog: Blog) {
    console.log("save blog .....")
    await this.getConfig()

    const url = `${this.configUrl.url}/blog`;
    console.log('endtry point', url);
    console.log('newBlog', newBlog);

    return await this.http.post(url, newBlog, {responseType:'text'}).pipe(
      map((res: any) => {
        console.log("res", res)
        return of(res);
      }),
      catchError((err: any) => {
        console.log("res", err);
        return of(err);
      })
    ).toPromise()
  }


  async editBlog(blog: Blog) {
    console.log("edit blog...")
    await this.getConfig()

    const url = `${this.configUrl.url}/blog`;
    console.log('endtry point', url);

  }

  async getBlog(id: number | string) {
    console.log("get blog .....")
    await this.getConfig()

    let blog: Blog;
    const url = `${this.configUrl.url}/blog/${id}`;
    console.log('endtry point', url);
    //observe: response for getting full response
    return this.http.get(url, { observe: 'response', responseType: 'json' }).pipe(
      map((res: any) => {
        console.log("res", res)
        return res;
      }),
      catchError((err: any) => {
        console.log("res", err);
        return err;
      })
    );

  }

  getBlogs(): Observable<Blog[]> {
    return of(MOCKBLOGS);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
