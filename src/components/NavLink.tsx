import { Link, useLocation, type LinkProps } from "react-router-dom";

export type NavLinkProps = LinkProps;

export function NavLink({
  className,
  to,
  ...props
}: NavLinkProps) {
  const { pathname } = useLocation();

  const isActive =
    typeof to === "string"
      ? pathname === to
      : false;

  return (
    <Link
      {...props}
      to={to}
      data-current={isActive}
      className={`flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground/80 data-[current=true]:text-foreground ${className ?? ""
        }`}
    />
  );
}
