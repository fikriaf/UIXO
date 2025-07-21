import { Link, useLocation } from "wouter";
import { categories } from "@/data/components";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isMobileMenuOpen: boolean;
}

export default function Sidebar({ isMobileMenuOpen }: SidebarProps) {
  const [location] = useLocation();

  return (
    <aside className={cn(
      "w-64 bg-white border-r border-slate-200 transition-transform duration-300",
      "hidden lg:block",
      isMobileMenuOpen ? "lg:translate-x-0" : ""
    )}>
      <div className="p-6">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-4">
          Categories
        </h3>
        <nav className="space-y-1">
          {categories.map((category) => {
            const isActive = location.includes(`/category/${category.id}`);
            return (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group",
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                )}
              >
                <category.icon className={cn(
                  "w-5 h-5 mr-3 transition-colors duration-200",
                  isActive
                    ? "text-blue-500"
                    : "text-slate-400 group-hover:text-blue-500"
                )} />
                {category.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
