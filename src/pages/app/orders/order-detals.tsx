import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetalls() {

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle> Pedido: 1218181122h </DialogTitle>
                <DialogDescription>Detalhes do pedido</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Status</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground">Pendente</span>
                                </div>
                            </TableCell>

                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Cliente</TableCell>
                            <TableCell className="flex justify-end">
                                Andre Gideao
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Telefone</TableCell>
                            <TableCell className="flex justify-end">
                                <span className="">(244) 933 222 211</span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Telefone</TableCell>
                            <TableCell className="flex justify-end">
                                Realizado há 2 minutos
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Pedido</TableHead>

                            <TableHead className="text-right">
                                Qtd. 
                            </TableHead>

                            <TableHead className="text-right">Preço</TableHead>

                            <TableHead className="text-right">Subtotal</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Pizza Benga</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">AOA 20211</TableCell>
                            <TableCell className="text-right">AOA 212123</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pizza de Peperone</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">AOA 20211</TableCell>
                            <TableCell className="text-right">AOA 212123</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total do pedido</TableCell>
                            <TableCell className="text-right font-medium">AOA 32282</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}