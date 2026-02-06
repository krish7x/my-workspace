import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  page?: string;
}

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadPayload = await request.json();

    const { name, email, phone, message, page } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name is required and must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Placeholder: trigger email communication
    // Replace with actual email provider (SendGrid, Resend, etc.) when ready
    await triggerEmailStub({
      name: name.trim(),
      email: email.trim(),
      phone: typeof phone === "string" ? phone.trim() : "",
      message: typeof message === "string" ? message.trim() : "",
      page: typeof page === "string" ? page : "",
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload" },
      { status: 400 }
    );
  }
}

async function triggerEmailStub(payload: {
  name: string;
  email: string;
  phone: string;
  message: string;
  page: string;
}): Promise<void> {
  // Stub: Log for development. Replace with actual email integration.
  console.log("[Lead captured]", {
    ...payload,
    timestamp: new Date().toISOString(),
  });
}
