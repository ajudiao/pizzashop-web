import { useState } from "react";
import { Home, MenuIcon, Pizza, Utensils, X } from "lucide-react";
import { Separator } from "./ui/separator";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./theme/theme-toggle";
import { AccountMenu } from "./AccountMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center border-b p-4">
      {/* Logo */}
      <Pizza className="h-6 w-6" />

      <Separator
        className="mx-4 hidden h-6 md:block"
        orientation="vertical"
      />

      {/* Menu desktop */}
      <nav className="hidden items-center gap-1.5 md:flex md:space-x-4 lg:space-x-6">
        <NavLink to="/">
          <Home className="h-4 w-4" />
          Início
        </NavLink>

        <NavLink to="/orders">
          <Utensils className="h-4 w-4" />
          Pedidos
        </NavLink>
      </nav>

      {/* Área direita */}
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <AccountMenu />

        {/* Botão mobile */}
        <button
          type="button"
          className="rounded-md p-2 hover:bg-muted md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="absolute left-0 top-full z-50 flex w-full flex-col gap-2 border-b bg-background p-4 md:hidden">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <Home className="h-4 w-4" />
            Início
          </NavLink>

          <NavLink to="/orders" onClick={() => setMenuOpen(false)}>
            <Utensils className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>
      )}
    </header>
  );
}