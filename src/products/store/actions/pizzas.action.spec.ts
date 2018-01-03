import * as fromPizzas from "./pizzas.action";

describe("Pizza Actions", () => {
  describe("Load Pizzas Action", () => {
    describe("LoadPizzas", () => {
      it("should create an action", () => {
        const action = new fromPizzas.LoadPizzas();
        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS
        });
      });
    });
    describe("LoadPizzasFail", () => {
      it("should create an action", () => {
        const payload = { message: "Error" };
        const action = new fromPizzas.LoadPizzasFail(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS_FAIL,
          payload
        });
      });
    });
    describe("LoadPizzasSuccess", () => {
      it("should create an action", () => {
        const payload = [
          {
            name: "Blazin' Inferno",
            toppings: [
              {
                id: 10,
                name: "pepperoni"
              },
              {
                id: 9,
                name: "pepper"
              },
              {
                id: 3,
                name: "basil"
              },
              {
                id: 4,
                name: "chili"
              },
              {
                id: 7,
                name: "olive"
              },
              {
                id: 2,
                name: "bacon"
              }
            ],
            id: 1
          },
          {
            name: "Seaside Surfin'",
            toppings: [
              {
                id: 6,
                name: "mushroom"
              },
              {
                id: 7,
                name: "olive"
              },
              {
                id: 2,
                name: "bacon"
              },
              {
                id: 3,
                name: "basil"
              },
              {
                id: 1,
                name: "anchovy"
              },
              {
                id: 8,
                name: "onion"
              },
              {
                id: 11,
                name: "sweetcorn"
              },
              {
                id: 9,
                name: "pepper"
              },
              {
                id: 5,
                name: "mozzarella"
              }
            ],
            id: 2
          },
          {
            name: "Plain Ol' Pepperoni",
            toppings: [
              {
                id: 10,
                name: "pepperoni"
              }
            ],
            id: 3
          },
          {
            name: "test",
            toppings: [
              {
                id: 1,
                name: "anchovy"
              },
              {
                id: 6,
                name: "mushroom"
              }
            ],
            id: 4
          }
        ];
        const action = new fromPizzas.LoadPizzasSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS_SUCCESS,
          payload
        });
      });
    });
  });
});
