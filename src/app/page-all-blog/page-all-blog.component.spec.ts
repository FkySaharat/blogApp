import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAllBlogComponent } from './page-all-blog.component';

describe('PageAllBlogComponent', () => {
  let component: PageAllBlogComponent;
  let fixture: ComponentFixture<PageAllBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAllBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAllBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
