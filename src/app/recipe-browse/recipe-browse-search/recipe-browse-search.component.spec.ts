import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBrowseSearchComponent } from './recipe-browse-search.component';

describe('RecipeBrowseSearchComponent', () => {
  let component: RecipeBrowseSearchComponent;
  let fixture: ComponentFixture<RecipeBrowseSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBrowseSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBrowseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
