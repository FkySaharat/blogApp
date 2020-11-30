import { Component, OnInit } from '@angular/core';
import * as marked from 'marked';

@Component({
  selector: 'app-page-add-blog',
  templateUrl: './page-add-blog.component.html',
  styleUrls: ['./page-add-blog.component.css']
})
export class PageAddBlogComponent implements OnInit {

  compiledMarkdown: string;
  startingValue = '';

  constructor() { 
  }

  ngOnInit(): void {
    this.startingValue = this.getPlaceHolder();
    this.compiledMarkdown = this.compileMarkdown(this.startingValue);
  }

  private getPlaceHolder(){
    return `# Title \n`
  }

  private compileMarkdown(value:string): string{
    return marked.parser(marked.lexer(value));
  }

  onValueChanged(value:string){
    console.log('Parent',value)
    this.startingValue = value;
    this.compiledMarkdown = this.compileMarkdown(value);

  }
}
