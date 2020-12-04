import { Component, OnInit } from '@angular/core';
import * as marked from 'marked';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-page-add-blog',
  templateUrl: './page-add-blog.component.html',
  styleUrls: ['./page-add-blog.component.css']
})
export class PageAddBlogComponent implements OnInit {

  compiledMarkdown: string;
  startingValue = '';
  blog: { "header": string, "body": string, "tag": string[] }

  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.startingValue = this.getPlaceHolder();
    this.compiledMarkdown = this.compileMarkdown(this.startingValue);
    console.log("this is add blog")
  }

  private getPlaceHolder() {
    return `# Title \n`
  }

  private compileMarkdown(value: string): string {
    return marked.parser(marked.lexer(value));
  }

  onValueChanged(value: string) {
    // console.log('Parent',value)
    this.startingValue = value;
    this.compiledMarkdown = this.compileMarkdown(value);


  }

  async saveBlog() {
    let blogContent = this.startingValue;

    let header = blogContent.split(/\n\n/)[0];
    let indexOfStartingBody = blogContent.search(/\n\n/);
    let body = blogContent.slice(indexOfStartingBody, blogContent.length)

    let blog: Blog = {
      id: "",
      header: header,
      body: body,
      writer: "0",
      coWriter: [] as string[],
      tag: [] as string[],
      seriesId: "0"
    }


    if (blog.id == "" || blog.id == undefined) {
      let mes =await this.blogService.addNewBlog(blog);
    
    }
    else {
      (await this.blogService.editBlog(blog));
    }


  }
}

