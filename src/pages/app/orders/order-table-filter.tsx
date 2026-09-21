import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { useState } from "react";

export function OrdersTableFilters() {
    const [orderId, setOrderId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [status, setStatus] = useState("all");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log({
            orderId,
            customerName,
            status,
        });
    }

    function handleReset() {
        setOrderId("");
        setCustomerName("");
        setStatus("all");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 sm:flex-row"
        >
            <span className="text-sm font-semibold">
                Filtros
            </span>

            <Input
                placeholder="ID do pedido"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="h-8 w-full sm:w-[180px]"
            />

            <Input
                placeholder="Nome do cliente"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="h-8 w-full sm:w-[320px]"
            />

            <Select
                value={status}
                onValueChange={(value) => setStatus(value ?? "all")}
            >
                <SelectTrigger className="h-8 w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">
                        Todos
                    </SelectItem>

                    <SelectItem value="pending">
                        Pendente
                    </SelectItem>

                    <SelectItem value="canceled">
                        Cancelado
                    </SelectItem>

                    <SelectItem value="processing">
                        Processando
                    </SelectItem>

                    <SelectItem value="delivering">
                        Em entrega
                    </SelectItem>

                    <SelectItem value="delivered">
                        Entregue
                    </SelectItem>
                </SelectContent>
            </Select>

            <Button
                type="submit"
                variant="secondary"
                size="sm"
            >
                <Search className="mr-2 h-4 w-4" />
                Filtrar resultados
            </Button>

            <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleReset}
            >
                <X className="mr-2 h-4 w-4" />
                Remover filtros
            </Button>
        </form>
    );
}