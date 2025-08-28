import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourse } from './add-course';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('AddCourse', () => {
  let component: AddCourse;
  let fixture: ComponentFixture<AddCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCourse],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
