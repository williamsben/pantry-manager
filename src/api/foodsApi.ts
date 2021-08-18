import { Food } from "../App";

const BASE_URL = "http://localhost:3001/foods";

export async function getFoods(): Promise<Food[]> {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) throw new Error("Call to get foods failed.");
  return await response.json();
}

export async function deleteFood(id: number) {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Delete failed.");
  return response.json();
}
