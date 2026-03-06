"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Twitter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Mert Yıldırım",
    title: "Kurucu & CEO",
    bio: "10+ yıl yazılım geliştirme deneyimi. Dijital dönüşüm ve kurumsal yazılım uzmanı.",
    avatar: "MY",
    color: "bg-agno-500",
    linkedin: "#",
    twitter: "#",
    skills: ["Strateji", "Full-Stack", "ERP"],
  },
  {
    name: "Ayşe Çelik",
    title: "CTO & Baş Geliştirici",
    bio: "React ve Node.js ekosisteminde uzman. Ölçeklenebilir mimari tasarım.",
    avatar: "AÇ",
    color: "bg-cyan-600",
    linkedin: "#",
    twitter: "#",
    skills: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    name: "Emre Kara",
    title: "Tasarım Direktörü",
    bio: "UI/UX tasarım uzmanı. Kullanıcı odaklı deneyim ve arayüz tasarımı.",
    avatar: "EK",
    color: "bg-purple-600",
    linkedin: "#",
    twitter: null,
    skills: ["UI/UX", "Figma", "Prototip"],
  },
  {
    name: "Selin Doğan",
    title: "ERP & CRM Uzmanı",
    bio: "Kurumsal yazılım entegrasyon ve özelleştirme konusunda 7+ yıl.",
    avatar: "SD",
    color: "bg-green-600",
    linkedin: "#",
    twitter: null,
    skills: ["Odoo", "SAP", "CRM"],
  },
];

export function TeamSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding" id="ekip">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="default" className="mb-4">Ekibimiz</Badge>
          <h2 className="section-title">
            Arkamızdaki <span className="text-gradient">Güçlü Ekip</span>
          </h2>
          <p className="section-subtitle mt-4 mx-auto">
            Alanında uzman, tutkulu ve çözüm odaklı ekibimizle tanışın.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass-hover rounded-2xl p-6 flex flex-col items-center text-center gap-4"
            >
              {/* Avatar */}
              <div className="relative">
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl ${member.color} text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform`}
                >
                  {member.avatar}
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mt-0.5">{member.title}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 justify-center">
                {member.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-2 mt-auto">
                <a
                  href={member.linkedin}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
                {member.twitter && (
                  <a
                    href={member.twitter}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
