import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacemanComponent } from './spaceman.component';

describe('SpacemanComponent', () => {
  let component: SpacemanComponent;
  let fixture: ComponentFixture<SpacemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacemanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
