import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetalls } from "./order-detals";
import { OrderStatus } from "./order-status";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface OrderTableRowProps {
    order: {
        orderId: string;
        createdAt: string;
        status: "canceled" | "delivered" | "delivering" | "pending" | "processing";
        customerName: string;
        total: number;
    }
}

export function OrderTableRow({ order }: OrderTableRowProps) {
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
                {order.orderId}
            </TableCell>

            {/* Data */}
            <TableCell className="whitespace-nowrap text-muted-foreground">
                {formatDistanceToNow(order.createdAt, {
                    locale: ptBR,
                    addSuffix: true,
                })}
            </TableCell>

            {/* Status */}
            <TableCell>
               <OrderStatus status={order.status} />
            </TableCell>

            {/* Cliente */}
            <TableCell className="font-medium">
                {order.customerName}
            </TableCell>

            {/* Total */}
            <TableCell className="whitespace-nowrap font-medium">
                {order.total.toLocaleString('pt-AO', {
                    style: 'currency',
                    currency: 'AOA'
                })}
            </TableCell>

            {/* Acções */}
            <TableCell>
                <div className="flex items-center gap-1">
                    {order.status === "pending" && (
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