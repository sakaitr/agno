"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  MessageSquare,
  FolderOpen,
  FileText,
  Package,
  Settings,
  LogOut,
  Zap,
  Users,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Mesajlar", href: "/admin/dashboard/mesajlar", icon: MessageSquare },
  { label: "Portfolio", href: "/admin/dashboard/portfolio", icon: FolderOpen },
  { label: "Blog", href: "/admin/dashboard/blog", icon: FileText },
  { label: "Ürünler", href: "/admin/dashboard/urunler", icon: Package },
  { label: "Yorumlar", href: "/admin/dashboard/yorumlar", icon: Star },
  { label: "Ekip", href: "/admin/dashboard/ekip", icon: Users },
  { label: "Ayarlar", href: "/admin/dashboard/ayarlar", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 border-r border-border bg-card/95 backdrop-blur-xl flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-agno-gradient shadow-lg shadow-primary/30">
          <Zap className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="font-bold text-sm">
            <span className="text-gradient">AGNO</span> Admin
          </p>
          <p className="text-xs text-muted-foreground">Yönetim Paneli</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-0.5",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-border">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors mb-0.5"
        >
          <Zap className="h-4 w-4" />
          Siteyi Görüntüle
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Çıkış Yap
        </button>
      </div>
    </aside>
  );
}
