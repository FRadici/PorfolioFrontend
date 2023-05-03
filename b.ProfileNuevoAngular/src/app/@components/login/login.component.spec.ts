import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loginComponents} from './login.component';

describe('LoginComponent', () => {
  let component: loginComponents;
  let fixture: ComponentFixture<loginComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ loginComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(loginComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
