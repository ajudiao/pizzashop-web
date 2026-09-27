import { api } from "@/lib/axios";

interface GetManagedRestaurant {
  createdAt: Date | null;
  description: string | null;
  id: string;
  managerId: string | null;
  name: string;
  updatedAt: Date | null;
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurant>("/managed-restaurant");

  return response.data;
}
