import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resume24Component } from './resume24.component';

describe('Resume24Component', () => {
  let component: Resume24Component;
  let fixture: ComponentFixture<Resume24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resume24Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Resume24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
