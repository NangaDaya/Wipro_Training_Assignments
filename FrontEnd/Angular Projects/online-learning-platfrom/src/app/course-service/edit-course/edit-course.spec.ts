import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourse } from './edit-course';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('EditCourse', () => {
  let component: EditCourse;
  let fixture: ComponentFixture<EditCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCourse],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCourse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
