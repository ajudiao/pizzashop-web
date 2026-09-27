import { Helmet } from "react-helmet-async";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrdersTableFilters } from "./order-table-filter";
import { Pagination } from "@/components/Pagination";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/get-orders";

export function Orders() {
    const { data: result } = useQuery({
        queryKey: ['orders'],
        queryFn: getOrders,
    })
    return (
        <>
            <Helmet title="Pedidos" />

            {/* Cabeçalho da página */}
            <div className="flex flex-col gap-1">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Pedidos
                    </h1>

                    <p className="text-muted-foreground">
                        Lista de pedidos realizados na loja.
                    </p>
                </div>

                {/* Filtros */}
                <div className="mt-6">
                    <OrdersTableFilters />
                </div>

                {/* Tabela de pedidos */}
                <div className="mt-6 overflow-x-auto rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-16"></TableHead>

                                <TableHead>ID</TableHead>

                                <TableHead className="whitespace-nowrap">
                                    Realizado há
                                </TableHead>

                                <TableHead>Status</TableHead>

                                <TableHead>Cliente</TableHead>

                                <TableHead className="whitespace-nowrap">
                                    Total do pedido
                                </TableHead>

                                <TableHead className="whitespace-nowrap">
                                    Acções
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {result && result.orders.map((order) => {
                                return <OrderTableRow key={order.orderId} order={order} />
                            })}
                        </TableBody>
                    </Table>
                </div>
                <Pagination pageIndex={0} totalCount={105} perPage={10} />
            </div>
        </>
    );
}
