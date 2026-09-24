import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import colors from 'tailwindcss/colors'

import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
} from 'recharts'

const data = [
    {data: '12/01', revenue: 100},
    {data: '13/01', revenue: 120},
    {data: '15/08', revenue: 446},
    {data: '17/12', revenue: 150},
]

export function RevenueChart() {


    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">
                        Receita no período
                    </CardTitle>
                    <CardDescription>Receita diária no período</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{ fontSize: 12 }}>
                        <XAxis dataKey="data" tickLine={false} axisLine={false} dy={16} />

                        <YAxis stroke="#888" axisLine={false} tickLine={false} tickFormatter={(value: number) => value.toLocaleString('pt-AO', {style: 'currency', currency: "AOA"})} width={80} />
                        <Line type="linear" strokeWidth="2" dataKey="revenue" stroke={colors.violet['400']} />

                        <CartesianGrid vertical={false} className="stroke-muted" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}