import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotification } from './edit-notification';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('EditNotification', () => {
  let component: EditNotification;
  let fixture: ComponentFixture<EditNotification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditNotification],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNotification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
