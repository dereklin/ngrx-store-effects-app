import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';

@Injectable()
export class PizzasEffects {
  constructor(private actions$: Actions, private pizzaService: fromServices.PizzasService) {
    
  }

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
    .pipe(
      switchMap(() => {
        return this.pizzaService.getPizzas().pipe(
          map((pizzas) => {
            return new pizzaActions.LoadPizzasSuccess(pizzas);
          }),
          catchError((error) => {
            return of(new pizzaActions.LoadPizzasFail(error));
          })
        )
      })
    )
}