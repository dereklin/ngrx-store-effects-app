import { PizzasGuard } from './pizzas.guard';
import { ToppingsGuard } from './toppings.guard';
import { PizzaExistsGuard } from './pizza-exists.guard';

export const guards: any[] = [PizzasGuard, PizzaExistsGuard, ToppingsGuard];

export * from './pizzas.guard';
export * from './pizza-exists.guard';
export * from './toppings.guard';