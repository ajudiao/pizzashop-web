import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetalls } from "./order-detals";

interface Order {
    id: string;
    createdAt: string;
    status: "Pendente" | "Aprovado" | "Cancelado";
    customer: string;
    total: string;
}

interface OrdersTableRowProps {
    order: Order;
}

export function OrdersTableRow({ order }: OrdersTableRowProps) {
    return (
        <TableRow>
            {/* Ver detalhes */}
            <TableCell>
                <Dialog>
                    <DialogTrigger
                        render={
                            <Button
                                variant="outline"
                                size="xs"
                                title="Ver detalhes"
                            >
                                <Search className="h-3.5 w-3.5" />

                                <span className="sr-only">
                                    Ver detalhes do pedido
                                </span>
                            </Button>
                        }
                    />
                    <OrderDetalls />

                </Dialog>
            </TableCell>

            {/* ID */}
            <TableCell className="font-mono text-xs font-medium">
                {order.id}
            </TableCell>

            {/* Data */}
            <TableCell className="whitespace-nowrap text-muted-foreground">
                {order.createdAt}
            </TableCell>

            {/* Status */}
            <TableCell>
                <div className="flex items-center gap-2">
                    <span
                        className={`h-2 w-2 rounded-full ${order.status === "Pendente"
                            ? "bg-yellow-500"
                            : order.status === "Aprovado"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                    />

                    <span
                        className={`font-medium ${order.status === "Pendente"
                            ? "text-yellow-600"
                            : order.status === "Aprovado"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                    >
                        {order.status}
                    </span>
                </div>
            </TableCell>

            {/* Cliente */}
            <TableCell className="font-medium">
                {order.customer}
            </TableCell>

            {/* Total */}
            <TableCell className="whitespace-nowrap font-medium">
                {order.total}
            </TableCell>

            {/* Acções */}
            <TableCell>
                <div className="flex items-center gap-1">
                    {order.status === "Pendente" && (
                        <>
                            <Button
                                variant="ghost"
                                size="xs"
                                className="text-green-600 hover:text-green-700"
                            >
                                <ArrowRight className="mr-1.5 h-3 w-3" />
                                Aprovar
                            </Button>

                            <Button
                                variant="ghost"
                                size="xs"
                                className="text-red-600 hover:text-red-700"
                            >
                                <X className="mr-1.5 h-3 w-3" />
                                Cancelar
                            </Button>
                        </>
                    )}
                </div>
            </TableCell>
        </TableRow>
    );
}