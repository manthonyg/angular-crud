import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBookListComponent } from './recipe-book-list.component';

describe('RecipeBookListComponent', () => {
  let component: RecipeBookListComponent;
  let fixture: ComponentFixture<RecipeBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
