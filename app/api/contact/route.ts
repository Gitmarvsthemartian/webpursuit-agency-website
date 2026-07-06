import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json()

    const { error } = await resend.emails.send({
      from: 'WebPursuit Contact <noreply@webpursuitph.com>',
      to: ['crietamarvin@yahoo.com'], 
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>

        <hr>

        <h3>Project Details</h3>

        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email.' },
      { status: 500 }
    )
  }
}