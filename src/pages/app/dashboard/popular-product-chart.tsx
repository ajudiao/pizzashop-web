import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

import { BarChart3 } from "lucide-react";

import colors from "tailwindcss/colors";

const COLORS = [
    colors.violet["500"],
    colors.amber["500"],
    colors.emerald["500"],
    colors.sky["500"],
    colors.rose["500"],
];

const data = [
    { product: "Pizza de peperone", amount: 100 },
    { product: "Benga Pizza", amount: 120 },
    { product: "Simple Pizza", amount: 446 },
    { product: "Pizza", amount: 150 },
];

const formatProductName = (name: string) => {
    return name.length > 12
        ? `${name.substring(0, 12)}...`
        : name;
};

export function PopularProductChart() {
    return (
        <Card className="col-span-3">
            <CardHeader className="pb-8">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium">
                        Produtos populares
                    </CardTitle>

                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </div>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <PieChart style={{ fontSize: 12 }}>
                        <Pie
                            data={data}
                            dataKey="amount"
                            nameKey="product"
                            cx="50%"
                            cy="50%"
                            outerRadius={86}
                            innerRadius={64}
                            strokeWidth={8}
                            labelLine={false}
                            label={({
                                cx,
                                cy,
                                midAngle = 0,
                                innerRadius,
                                outerRadius,
                                name = "",
                            }) => {
                                const RADIAN = Math.PI / 180;

                                const radius =
                                    innerRadius +
                                    (outerRadius - innerRadius) +
                                    12;

                                const x =
                                    cx +
                                    radius *
                                        Math.cos(-midAngle * RADIAN);

                                const y =
                                    cy +
                                    radius *
                                        Math.sin(-midAngle * RADIAN);

                                return (
                                    <text
                                        x={x}
                                        y={y}
                                        className="fill-muted-foreground text-xs"
                                        textAnchor={
                                            x > cx ? "start" : "end"
                                        }
                                        dominantBaseline="central"
                                    >
                                        {formatProductName(name)}
                                    </text>
                                );
                            }}
                        >
                            {data.map((_, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index]}
                                    className="stroke-background hover:opacity-80"
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}