import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBrowseListComponent } from './recipe-browse-list.component';

describe('RecipeBrowseListComponent', () => {
  let component: RecipeBrowseListComponent;
  let fixture: ComponentFixture<RecipeBrowseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBrowseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBrowseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
