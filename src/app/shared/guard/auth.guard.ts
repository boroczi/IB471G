import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { map, take, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.currentUser.pipe(
    take(1),
    map((user) => {
      if (user && localStorage.getItem('user')) {
        return true;
      }

      router.navigate(['/']);
      return false;
    })
  );
};

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.currentUser.pipe(
    take(1),
    switchMap((user) => {
      if (user && localStorage.getItem('user')) {
        return from(authService.validateAdmin()).pipe(
          map((isAdmin) => {
            if (isAdmin) {
              return true;
            } else {
              router.navigate(['/']);
              return false;
            }
          })
        );
      }

      router.navigate(['/']);
      return of(false);
    })
  );
};
