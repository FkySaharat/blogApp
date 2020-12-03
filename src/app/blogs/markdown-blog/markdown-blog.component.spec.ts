import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownBlogComponent } from './markdown-blog.component';

describe('MarkdownBlogComponent', () => {
  let component: MarkdownBlogComponent;
  let fixture: ComponentFixture<MarkdownBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
