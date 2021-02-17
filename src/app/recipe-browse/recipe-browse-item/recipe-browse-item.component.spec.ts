import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBrowseItemComponent } from './recipe-browse-item.component';

describe('RecipeBrowseItemComponent', () => {
  let component: RecipeBrowseItemComponent;
  let fixture: ComponentFixture<RecipeBrowseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBrowseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBrowseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
