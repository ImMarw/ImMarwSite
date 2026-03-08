import nodemailer from 'nodemailer';

// SMTP configuration - update these with your real SMTP credentials
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const SMTP_TO = process.env.SMTP_TO || 'immarw01@gmail.com'; // Your email to receive messages

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    try {
        const { name, email, message } = await request.json();

        // Validate input
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'Vyplňte prosím všechna pole.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(JSON.stringify({ error: 'Neplatný e-mail.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Check SMTP credentials
        if (!SMTP_USER || !SMTP_PASS) {
            console.error('SMTP credentials not configured. Set SMTP_USER and SMTP_PASS env variables.');
            return new Response(JSON.stringify({ error: 'E-mailová služba není nakonfigurována.' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: SMTP_PORT === 465,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS
            }
        });

        // Send email
        await transporter.sendMail({
            from: `"ImMarw Web" <${SMTP_USER}>`,
            replyTo: `"${name}" <${email}>`,
            to: SMTP_TO,
            subject: `Nová poptávka od ${name} – ImMarw.cz`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #0891b2;">Nová poptávka z webu</h2>
                    <hr style="border: 1px solid #e2e8f0;" />
                    <p><strong>Jméno:</strong> ${name}</p>
                    <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Zpráva:</strong></p>
                    <div style="background: #f8fafc; border-radius: 8px; padding: 16px; border: 1px solid #e2e8f0;">
                        ${message.replace(/\n/g, '<br/>')}
                    </div>
                    <hr style="border: 1px solid #e2e8f0; margin-top: 24px;" />
                    <p style="color: #94a3b8; font-size: 12px;">Odesláno z kontaktního formuláře na immarw.cz</p>
                </div>
            `,
            text: `Nová poptávka z webu\n\nJméno: ${name}\nE-mail: ${email}\nZpráva:\n${message}`
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
