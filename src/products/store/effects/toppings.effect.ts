import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromServices from '../../services';
import * as toppingsActions from '../actions/toppings.action';

@Injectable()
export class ToppingsEffects {
  constructor(private actions$: Actions, private toppingsService: fromServices.ToppingsService) {
    
  }

  @Effect()
  loadToppings$ = this.actions$
    .pipe(
      ofType(toppingsActions.LOAD_TOPPINGS),
      switchMap(() => {
        return this.toppingsService.getToppings().pipe(
          map((toppings) => {
            return new toppingsActions.LoadToppingsSuccess(toppings);
          }),
          catchError((error) => {
            return of(new toppingsActions.LoadToppingsFail(error));
          })
        )
      })
    )
}