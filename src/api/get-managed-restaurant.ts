import { api } from "@/lib/axios";

export interface GetManagedRestaurantResponse {
  createdAt: Date | null;
  description: string | null;
  id: string;
  managerId: string | null;
  name: string;
  updatedAt: Date | null;
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>("/managed-restaurant");

  return response.data;
}
