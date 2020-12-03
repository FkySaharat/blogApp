import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyBlogComponent } from './page-my-blog.component';

describe('PageMyBlogComponent', () => {
  let component: PageMyBlogComponent;
  let fixture: ComponentFixture<PageMyBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMyBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMyBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
