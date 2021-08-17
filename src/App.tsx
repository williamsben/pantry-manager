type Food = {
  name: string;
  quantity: number;
  reorderPoint: number;
  type: string;
};

const foods: Food[] = [
  { name: "Carrot", quantity: 1, reorderPoint: 0, type: "Vegetable" },
  { name: "Potato", quantity: 2, reorderPoint: 0, type: "Vegetable" },
];

export function App() {
  function foodRow(food: Food) {
    // key needs to be unique and ideally static for the best performance
    return (
      <tr key={food.name}>
        <td>{food.name}</td>
        <td>{food.quantity}</td>
        <td>{food.reorderPoint}</td>
        <td>{food.type}</td>
      </tr>
    );
  }
  return (
    <>
      <h1>Pantry Manager</h1>
      <ul>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Reorder Point</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{foods.map((food) => foodRow(food))}</tbody>
        </table>
      </ul>
    </>
  ); // react fragment
  // shorthand for <React.Fragment></React.Fragment>
}
