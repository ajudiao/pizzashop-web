import { Helmet } from "react-helmet-async";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { OrdersTableRow } from "./order-table-row";
import { OrdersTableFilters } from "./order-table-filter";
import { Pagination } from "@/components/pagination";

const orders: Array<{
    id: string;
    createdAt: string;
    status: "Pendente" | "Aprovado" | "Cancelado";
    customer: string;
    total: string;
}> = [
        {
            id: "1234567890",
            createdAt: "2023-06-01",
            status: "Pendente",
            customer: "João Silva",
            total: "AOA 100,00",
        },
        {
            id: "0987654321",
            createdAt: "2023-06-02",
            status: "Aprovado",
            customer: "Maria Souza",
            total: "AOA 200,00",
        },
        {
            id: "5678901234",
            createdAt: "2023-06-03",
            status: "Cancelado",
            customer: "Pedro Santos",
            total: "AOA 150,00",
        },
    ];

export function Orders() {
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
                            {orders.map((order) => (
                                <OrdersTableRow
                                    key={order.id}
                                    order={order}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <Pagination pageIndex={0} totalCount={105} perPage={10} />
            </div>
        </>
    );
}
