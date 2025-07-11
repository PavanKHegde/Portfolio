// app/api/contact/route.js
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const msg = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `Portfolio Contact: ${name}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('SendGrid Error:', err.response?.body || err.message);
    return NextResponse.json({ error: 'Email send failed' }, { status: 500 });
  }
}
