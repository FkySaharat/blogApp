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

  onValueChange(event){
    console.log("change",event.target.value)
    this.valueChanged.emit(event.target.value);
    // const body = e.target.value;
  
    // this.valueChanged.emit(body);
    // if(!body){
    //   console.log("change",body)
    //    this.valueChanged.emit(this.placeHolder);
    // }else{
    //   console.log("no change",body)
    //   this.valueChanged.emit(body);
    // }
  }
}
