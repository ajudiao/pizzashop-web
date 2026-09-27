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
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

export function Orders() {
    const [searchParams, setSearchParams] = useSearchParams()

    const pageIndex = z.coerce.number()
        .transform(page => page - 1)
        .parse(searchParams.get('page') ?? '1')

    const { data: result } = useQuery({
        queryKey: ['orders', pageIndex],
        queryFn: () => getOrders({ pageIndex }),
    })

    function handlePagination(pageIndex: number) {
        setSearchParams((prev) => {
            prev.set('page', (pageIndex + 1).toString())

            return prev
        })
    }
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
                {result && (<Pagination onPageChange={handlePagination} pageIndex={pageIndex} totalCount={result.meta.totalCount} perPage={result.meta.perPage} />)}

            </div>
        </>
    );
}
