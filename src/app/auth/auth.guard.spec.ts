import { AuthGuard } from './auth.guard';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import {SpyLocation} from '@angular/common/testing';
import Spy = jasmine.Spy;

class MockAuthService extends AuthService {
  logged: boolean;
  isLoggedIn(): Observable<boolean> {
    return Observable.of(this.logged);
  }
  // Utility Method
  updateToBe(status) {
    this.logged = status;
  }
}

describe('AuthGuard', () => {
  let mockAuthService: MockAuthService;
  let authGuard: AuthGuard;
  let spy: Spy;
  beforeEach(() => {
    mockAuthService = new MockAuthService();
    authGuard = new AuthGuard(mockAuthService);
  });

  it('should call isLoggedIn from Service', () => {
    spy = spyOn(mockAuthService, 'isLoggedIn');
    authGuard.canActivate();
    expect(mockAuthService.isLoggedIn).toHaveBeenCalled();
  });

  it('should get the correct status',  () => {
    const truthyStatus = true;
    mockAuthService.updateToBe(true);
    authGuard.canActivate().toPromise().then((value) => {
      expect(value).toBe(truthyStatus);
    });
  });

});
