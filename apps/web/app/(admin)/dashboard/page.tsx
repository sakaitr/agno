import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { MessageSquare, FolderOpen, FileText, Package, TrendingUp } from "lucide-react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const [messageCount, unreadCount, portfolioCount, blogCount, serviceCount] =
    await Promise.all([
      prisma.contactMessage.count(),
      prisma.contactMessage.count({ where: { isRead: false } }),
      prisma.portfolio.count(),
      prisma.blogPost.count(),
      prisma.service.count(),
    ]);

  const recentMessages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    select: {
      id: true,
      fullName: true,
      subject: true,
      isRead: true,
      createdAt: true,
    },
  });

  const stats = [
    { label: "Toplam Mesaj", value: messageCount, sub: `${unreadCount} okunmamış`, icon: MessageSquare, color: "text-agno-400", bg: "bg-agno-500/10" },
    { label: "Portfolio", value: portfolioCount, sub: "Aktif proje", icon: FolderOpen, color: "text-cyan-400", bg: "bg-cyan-500/10" },
    { label: "Blog Yazıları", value: blogCount, sub: "Toplam yazı", icon: FileText, color: "text-purple-400", bg: "bg-purple-500/10" },
    { label: "Hizmetler", value: serviceCount, sub: "Aktif hizmet", icon: Package, color: "text-green-400", bg: "bg-green-500/10" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">
          Merhaba, {session.user?.name} 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          AGNO Yönetim Paneli
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.bg} mb-3`}>
              <s.icon className={`h-5 w-5 ${s.color}`} />
            </div>
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-sm font-medium text-foreground mt-0.5">{s.label}</p>
            <p className="text-xs text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Recent Messages */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="p-5 border-b border-border flex items-center justify-between">
          <h2 className="font-semibold text-foreground flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            Son Mesajlar
          </h2>
          {unreadCount > 0 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium">
              {unreadCount} yeni
            </span>
          )}
        </div>
        <div className="divide-y divide-border">
          {recentMessages.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground text-sm">
              Henüz mesaj yok
            </div>
          ) : (
            recentMessages.map((msg) => (
              <div
                key={msg.id}
                className="flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {!msg.isRead && (
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  )}
                  <div className={msg.isRead ? "ml-5" : ""}>
                    <p className="text-sm font-medium text-foreground">{msg.fullName}</p>
                    <p className="text-xs text-muted-foreground">{msg.subject}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">
                  {new Date(msg.createdAt).toLocaleDateString("tr-TR")}
                </span>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t border-border">
          <a href="/admin/dashboard/mesajlar" className="text-xs text-primary hover:underline">
            Tüm mesajları görüntüle →
          </a>
        </div>
      </div>
    </div>
  );
}
