import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBrowseDetailsComponent } from './recipe-browse-details.component';

describe('RecipeBrowseDetailsComponent', () => {
  let component: RecipeBrowseDetailsComponent;
  let fixture: ComponentFixture<RecipeBrowseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBrowseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBrowseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
