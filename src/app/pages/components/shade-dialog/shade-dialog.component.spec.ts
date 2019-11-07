import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeDialogComponent } from './shade-dialog.component';

describe('ShadeDialogComponent', () => {
  let component: ShadeDialogComponent;
  let fixture: ComponentFixture<ShadeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
