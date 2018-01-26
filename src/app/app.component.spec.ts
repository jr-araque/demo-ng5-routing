import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from './auth/auth.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        AdminModule,
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        AuthService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
