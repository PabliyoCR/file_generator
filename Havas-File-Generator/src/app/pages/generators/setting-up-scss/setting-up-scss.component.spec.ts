import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingUpScssComponent } from './setting-up-scss.component';

describe('SettingUpScssComponent', () => {
  let component: SettingUpScssComponent;
  let fixture: ComponentFixture<SettingUpScssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingUpScssComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingUpScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
