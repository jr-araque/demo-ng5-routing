import { AuthService } from './auth.service';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

describe('AuthService', function () {
  let authSvc: AuthService;

  beforeEach(() => {
    authSvc = new AuthService();
  });

  it('should updated user status', function () {
    authSvc.login('myCrazyUserName');
    authSvc.isLoggedIn().subscribe((status) => {
      expect(status).toBe(true);
    });
  });

});
