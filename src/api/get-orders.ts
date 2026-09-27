import { api } from "@/lib/axios";

export interface getOrdersResponse {
  orders: {
    orderId: string;
    createdAt: string;
    status: "canceled" | "delivered" | "delivering" | "pending" | "processing";
    customerName: string;
    total: number;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export async function getOrders() {
  const response = await api.get<getOrdersResponse>("/orders", {
    params: {
      pageIndex: 0,
    },
  });

  return response.data
}
