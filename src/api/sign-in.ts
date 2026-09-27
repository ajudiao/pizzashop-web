import { api } from "@/lib/axios";

export interface SignInBoby {
    email: string
}

export async function signIn({ email }: SignInBoby) {
    await api.post('/authenticate', { email })
}