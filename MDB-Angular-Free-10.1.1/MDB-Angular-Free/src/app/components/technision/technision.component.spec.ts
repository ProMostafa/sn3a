import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnisionComponent } from './technision.component';

describe('TechnisionComponent', () => {
  let component: TechnisionComponent;
  let fixture: ComponentFixture<TechnisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
