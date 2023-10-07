import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgtpasswordComponent } from './forgtpassword.component';

describe('ForgtpasswordComponent', () => {
  let component: ForgtpasswordComponent;
  let fixture: ComponentFixture<ForgtpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgtpasswordComponent]
    });
    fixture = TestBed.createComponent(ForgtpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
