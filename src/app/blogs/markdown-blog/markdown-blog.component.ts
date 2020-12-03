import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-markdown-blog',
  templateUrl: './markdown-blog.component.html',
  styleUrls: ['./markdown-blog.component.css']
})
export class MarkdownBlogComponent implements OnInit {
  @Input() compiled: string;
  @Input() placeHolder: string;
  
 
  @Output() valueChanged = new EventEmitter<string>();
 
  constructor() { }

  ngOnInit(): void {
  }

  public onValueChange(event){
    const body = event.target.value;
    console.log("child markdown",body)
    this.valueChanged.emit(body);
    
  }

}
