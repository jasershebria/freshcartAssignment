import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificcategoryComponent } from './specificcategory.component';

describe('SpecificcategoryComponent', () => {
  let component: SpecificcategoryComponent;
  let fixture: ComponentFixture<SpecificcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificcategoryComponent]
    });
    fixture = TestBed.createComponent(SpecificcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
