import { Home, Pizza, Utensils } from "lucide-react";
import { Separator } from "./ui/separator";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme/theme-toggle";
import { AccountMenu } from "./account-menu";

export function Header() {
  return (
    <header className="flex items-center p-4 border-b">
      <Pizza className="h-6 w-6" />

      <Separator className="mx-4 h-6" orientation="vertical" />

      <nav className="flex items-center gap-1.5 space-x-4 lg:space-x-6">
        <NavLink to="/">
          <Home className="h-4 w-4" />
          Início
        </NavLink>
        <NavLink to="/orders">
          <Utensils className="h-4 w-4" />
          Pedidos
        </NavLink>
      </nav>

      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <AccountMenu />
      </div>
    </header>
  );
}








//https://pt.pornhub.com/view_video.php?viewkey=6a20c1aadf421
