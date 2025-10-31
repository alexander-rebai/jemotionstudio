import Email from "@/components/Email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend_api_key = process.env.RESEND_API_KEY;
const resend_email = process.env.RESEND_EMAIL;
const resend = new Resend(resend_api_key);

export async function POST(request) {
  try {
    console.log("Received request to send email");
    const {
      typeRenovatie,
      budgetIndicatie,
      gewensteStartdatum,
      name,
      email,
      phone,
      extraInfo,
    } = await request.json();

    if (!resend_api_key) {
      return NextResponse.json(
        { error: "Missing Resend API key" },
        { status: 500 }
      );
    }

    if (!resend_email) {
      return NextResponse.json(
        { error: "Missing Resend email recipient" },
        { status: 500 }
      );
    }

    if (!name) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!phone) {
      return NextResponse.json(
        { error: "Phone is required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: resend_email,
      subject: "New Contact Form Submission",
      react: (
        <Email
          typeRenovatie={typeRenovatie}
          budgetIndicatie={budgetIndicatie}
          gewensteStartdatum={gewensteStartdatum}
          name={name}
          email={email}
          phone={phone}
          extraInfo={extraInfo}
        />
      ),
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to send email", details: e.message },
      { status: 500 }
    );
  }
}
