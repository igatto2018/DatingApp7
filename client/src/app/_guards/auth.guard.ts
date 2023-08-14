// import { Inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
// import { AccountService } from '../_services/account.service';
// import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

export const AuthGuard: CanActivateFn = (route, state) => {
  // const accountService = Inject(AccountService);
  // const toastr = Inject(ToastrService);

  return true;

  // return accountService.currentUser$.pipe(
  //   map(user => {
  //     if (user) return true;
  //     else {
  //       toastr.error('you shall not pass!');
  //       return false;
  //     }
  //   })
  // );
};
