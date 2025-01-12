import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET(res: NextResponse) {
    return NextResponse.json({ "message": "hello" });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // Create email transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS  
            }

        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'punyakritsinghmakhni@gmail.com', // Where you want to receive the emails
            subject: `New Contact Form Message from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}