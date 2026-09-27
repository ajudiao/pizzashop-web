import { api } from "@/lib/axios";

interface GetProfileResponse {
    createdAt: Date | null;
    email: string;
    id: string;
    name: string;
    phone: string | null;
    role: "customer" | "manager";
    updatedAt: Date | null;
}

export async function getProfile() {
    const response = await api.get<GetProfileResponse>('/me')

    return response.data
}