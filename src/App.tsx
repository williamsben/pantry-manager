import { ChangeEvent, useEffect, useState } from "react";
import { getFoods, deleteFood } from "./api/foodsApi";
import { Input } from "./shared/input";
import { Select } from "./shared/select";

export type Food = {
  id: number;
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

type NewFood = Omit<Food, "id">;

const emptyFood: NewFood = {
  name: "",
  quantity: 0,
  minQuantity: 0,
  type: "",
};

export function App() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [newFood, setNewFood] = useState<NewFood>(emptyFood);

  useEffect(() => {
    async function callGetFoods() {
      const _foods = await getFoods();
      setFoods(_foods);
    }

    callGetFoods();
    // using empty array for useEffect since we only want this to run once
  }, []);

  function onChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { value, id: propertyName } = event.target;
    setNewFood({ ...newFood, [propertyName]: value });
  }

  return (
    <>
      <h1>Pantry Manager</h1>
      <form>
        <Input
          label="Name"
          id="name"
          value={newFood.name}
          onChange={onChange}
        ></Input>
        <Input
          label="Quantity"
          id="quantity"
          value={newFood.quantity.toString()}
          onChange={onChange}
          type="number"
        ></Input>
        <Input
          label="Min Quantity"
          id="minQuantity"
          value={newFood.minQuantity.toString()}
          onChange={onChange}
          type="number"
        ></Input>
        <Select
          id="type"
          label="Type of Food"
          value={newFood.type}
          onChange={onChange}
          options={[
            { value: "Grain", label: "Grain" },
            { value: "Vegetable", label: "Vegetable" },
            { value: "Fruit", label: "Fruit" },
          ]}
        ></Select>
      </form>
      <ul>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Min Quantity</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food.name}>
                <td>
                  <button
                    onClick={async () => {
                      await deleteFood(food.id);
                      setFoods(foods.filter((f) => f.id !== food.id));
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>{food.name}</td>
                <td>{food.quantity}</td>
                <td>{food.minQuantity}</td>
                <td>{food.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
    </>
  ); // react fragment
  // shorthand for <React.Fragment></React.Fragment>
}
