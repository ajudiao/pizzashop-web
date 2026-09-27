import { api } from "@/lib/axios";

export interface RegisterRestaurantBody {
  restaurantName: string;
  email: string;
  managerName: string;
  phone: string;
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post("/restaurants", { restaurantName, managerName, email, phone });
}
