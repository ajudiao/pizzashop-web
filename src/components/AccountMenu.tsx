import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";

export function AccountMenu() {
    const { data: profile, isLoading: isLoadingProfile } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
    })
    const { data: managedRestaurant, isLoading: isLoadindManagedRestaurant } = useQuery({
        queryKey: ['managed-restaurant'],
        queryFn: getManagedRestaurant,
    })

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button variant='outline' className="flex items-center gap-2 select-none" />
                }
            >
                {managedRestaurant?.name}
                <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="flex flex-col">
                        <span>{profile?.name}</span>
                        <span className="text-xs font-normal text-muted-foreground">{profile?.email}</span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Building className="mr-2 w-4 h-4" />
                        <span>Perfil da loja</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                        <LogOut className="mr-2 w-4 h-4" />
                        <span>Sair</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu >
    );
}
