import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSkeletonComponent } from './trip-skeleton.component';

describe('TripSkeletonComponent', () => {
  let component: TripSkeletonComponent;
  let fixture: ComponentFixture<TripSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
