import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const contactSchema = z.object({
  fullName: z.string().min(2, "Ad soyad en az 2 karakter olmalıdır."),
  email: z.string().email("Geçerli bir e-posta adresi giriniz."),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, "Konu en az 3 karakter olmalıdır."),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır."),
  serviceId: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    // Save to DB
    const message = await prisma.contactMessage.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        company: data.company,
        subject: data.subject,
        message: data.message,
        serviceId: data.serviceId,
      },
    });

    // Send notification email
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: `AGNO Website <${process.env.RESEND_FROM_EMAIL || "noreply@agno.com.tr"}>`,
        to: ["info@agno.com.tr"],
        subject: `Yeni İletişim: ${data.subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4855ff;">Yeni İletişim Formu Mesajı</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Ad Soyad:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.fullName}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>E-posta:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.email}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.phone || "-"}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Şirket:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.company || "-"}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Konu:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.subject}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 8px;">
              <strong>Mesaj:</strong>
              <p style="margin-top: 8px;">${data.message}</p>
            </div>
            <p style="margin-top: 16px; color: #888; font-size: 12px;">Admin panelinden görüntüle: ${process.env.NEXTAUTH_URL}/admin/dashboard/mesajlar/${message.id}</p>
          </div>
        `,
      });

      // Auto-reply to sender
      await resend.emails.send({
        from: `AGNO <${process.env.RESEND_FROM_EMAIL || "noreply@agno.com.tr"}>`,
        to: [data.email],
        subject: "Mesajınızı Aldık | AGNO",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4855ff;">Mesajınızı Aldık!</h2>
            <p>Merhaba ${data.fullName},</p>
            <p>İletişim talebinizi aldık. En kısa sürede (genellikle 24 saat içinde) size geri döneceğiz.</p>
            <div style="margin: 24px 0; padding: 16px; background: #f0f4ff; border-left: 4px solid #4855ff; border-radius: 4px;">
              <strong>Konunuz:</strong> ${data.subject}
            </div>
            <p>Acil durumlarda bizi şu numaradan arayabilirsiniz: <strong>+90 500 000 00 00</strong></p>
            <br/>
            <p>Saygılarımızla,<br/><strong>AGNO Ekibi</strong></p>
          </div>
        `,
      });
    }

    return NextResponse.json(
      { success: true, id: message.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    console.error("[CONTACT API]", error);
    return NextResponse.json(
      { success: false, message: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}
