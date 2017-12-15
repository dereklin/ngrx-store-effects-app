import { Pizza } from '../../models/pizza.model';
import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import * as fromToppings from './toppings.selectors';

export const getPizzaState = createSelector(fromFeature.getProductsState, (state: fromFeature.ProductsState) => {
  return state.pizzas;
});

export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);

export const getSelectedPizza = createSelector(getPizzasEntities, fromRoot.getRouterState, (entities, router): Pizza => {
  return router.state && entities[parseInt(router.state.params.pizzaId, 10)]
});

export const getPizzaVisualized = createSelector(getSelectedPizza,
  fromToppings.getToppingsEntities,
  fromToppings.getSelectedToppings,
  (pizza, toppingEnitities, selectedToppings) => {
    const toppings = selectedToppings.map(id => toppingEnitities[id]);
    return { ...pizza, toppings };
  }
);

export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
  return Object.keys(entities).map((id) => {
    return entities[parseInt(id, 10)];
  });
});
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
