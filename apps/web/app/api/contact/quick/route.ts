import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const quickSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  topic: z.string().min(3),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = quickSchema.parse(body);

    await prisma.contactMessage.create({
      data: {
        fullName: data.name,
        email: "from-quick-form@agno.com.tr",
        phone: data.phone,
        subject: data.topic,
        message: `Hızlı form: ${data.topic}`,
      },
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
