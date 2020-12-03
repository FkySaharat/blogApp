import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailBlogComponent } from './detail-blog.component';

describe('DetailBlogComponent', () => {
  let component: PageDetailBlogComponent;
  let fixture: ComponentFixture<PageDetailBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDetailBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
