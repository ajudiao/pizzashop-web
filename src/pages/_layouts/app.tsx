// cdci@admin
import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom'

export function AppLayout() {
    return (
        <div className="flex min-h-screen flex-col antialiased">
            <Header />

            <main className="flex flex-1 gap-4 flex-col p-8 pt-6">
                <Outlet />
            </main>

        </div>
    )
}


