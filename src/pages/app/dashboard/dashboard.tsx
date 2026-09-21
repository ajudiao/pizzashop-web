import { Helmet } from "react-helmet-async";
import { MonthlyRevenueCard } from "./monthly-revenue-card";
import { MonthOrdersAmountCard } from "./month-orders-amount-card";
import { DayOrdersAmount } from "./day-orders-amount";
import { MonthCanceledOrdersAmountCard } from "./month-canceled-orders-amount";



export function Dashboard() {

    return (
        <>
            <Helmet title="Dashboard" />

            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <MonthlyRevenueCard />
                  <MonthOrdersAmountCard />
                  <DayOrdersAmount />
                  <MonthCanceledOrdersAmountCard />
                </div>
            </div>

        </>
    )
}