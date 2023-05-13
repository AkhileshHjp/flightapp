import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookafilgthComponent } from './bookafilgth.component';

describe('BookafilgthComponent', () => {
  let component: BookafilgthComponent;
  let fixture: ComponentFixture<BookafilgthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookafilgthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookafilgthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
