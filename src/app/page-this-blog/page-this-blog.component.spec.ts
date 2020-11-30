import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThisBlogComponent } from './page-this-blog.component';

describe('PageThisBlogComponent', () => {
  let component: PageThisBlogComponent;
  let fixture: ComponentFixture<PageThisBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageThisBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThisBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
