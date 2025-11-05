import Email from "@/components/Email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend_api_key = process.env.RESEND_API_KEY;
const resend = resend_api_key ? new Resend(resend_api_key) : null;
const resendFrom = "Renovise LEADS <renovise@mail.leveragelabs.io>";
const resendRecipient = "info@renovise.be";

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

    if (!resend_api_key || !resend) {
      console.log("[EMAIL:STUB] Contact form submission", {
        typeRenovatie,
        budgetIndicatie,
        gewensteStartdatum,
        name,
        email,
        phone,
        extraInfo,
      });
      return NextResponse.json({ success: true, stub: true }, { status: 200 });
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
      from: resendFrom,
      to: resendRecipient,
      subject: "Nieuw contactformulier ingediend",
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
