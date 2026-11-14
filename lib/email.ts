import nodemailer from 'nodemailer';

export const OFFICIAL_INBOX = 'contact@gopartnerlogistics.in';

interface ContactEmailPayload {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  subject: string;
  message: string;
  referenceId?: string;
  ipAddress?: string;
}

interface QuoteEmailPayload {
  fullName: string;
  companyName?: string;
  phoneNumber: string;
  emailAddress: string;
  pickupLocation: string;
  deliveryLocation: string;
  serviceType: string;
  cargoWeight?: string;
  cargoType?: string;
  notes?: string;
  estimatedCost?: string;
  referenceId?: string;
  ipAddress?: string;
}

/**
 * Creates and caches the nodemailer transporter using environment variables.
 * Returns null if SMTP credentials are not configured.
 */
function getEmailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const service = process.env.SMTP_SERVICE; // Optional: e.g. 'gmail'

  // If credentials are not provided, gracefully skip sending
  if (!user || !pass) {
    return null;
  }

  if (service && service.toLowerCase() === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });
  }

  if (service && service.toLowerCase() === 'zoho') {
    return nodemailer.createTransport({
      host: host || 'smtppro.zoho.in',
      port: port || 465,
      secure: (port || 465) === 465,
      auth: { user, pass },
    });
  }

  return nodemailer.createTransport({
    host: host || 'smtp.gmail.com',
    port: port,
    secure: port === 465,
    auth: { user, pass },
  });
}

/**
 * Send an email notification for a new Contact Enquiry
 */
export async function sendContactNotificationEmail(data: ContactEmailPayload) {
  const transporter = getEmailTransporter();
  const recipient = process.env.NOTIFICATION_EMAIL || OFFICIAL_INBOX;

  if (!transporter) {
    console.info(
      `[Email Notification Notice] New contact enquiry from ${data.fullName} (${data.emailAddress}). ` +
      `SMTP credentials (SMTP_USER/SMTP_PASS) not configured in .env; skipping automated email delivery to ${recipient}.`
    );
    return { success: false, reason: 'smtp_not_configured' };
  }

  const fromAddress = process.env.SMTP_FROM || `"GO-PARTNER Alerts" <${process.env.SMTP_USER}>`;
  const subject = `[New Contact Enquiry] ${data.subject || 'Website Message'} - ${data.fullName}`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
          .header { background: #0E1E38; padding: 24px; text-align: center; }
          .header h1 { color: #ffffff; font-size: 22px; margin: 0; letter-spacing: -0.5px; }
          .header p { color: #FF6B00; font-size: 13px; font-weight: 600; text-transform: uppercase; margin: 6px 0 0 0; letter-spacing: 1px; }
          .content { padding: 32px 28px; }
          .tag { display: inline-block; background: #fff7ed; color: #c2410c; border: 1px solid #ffedd5; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; margin-bottom: 20px; }
          .detail-row { margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
          .detail-label { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; margin-bottom: 4px; }
          .detail-value { font-size: 15px; color: #0f172a; font-weight: 500; }
          .message-box { background: #f8fafc; border-left: 4px solid #FF6B00; padding: 16px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 8px; white-space: pre-wrap; }
          .actions { margin-top: 28px; padding-top: 20px; text-align: center; }
          .btn { display: inline-block; background: #FF6B00; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; margin: 4px; }
          .btn-secondary { background: #0E1E38; }
          .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>GO-PARTNER LOGISTICS</h1>
            <p>New Website Contact Enquiry</p>
          </div>
          <div class="content">
            <span class="tag">Reference ID: ${data.referenceId || 'N/A'}</span>
            
            <div class="detail-row">
              <div class="detail-label">Customer Name</div>
              <div class="detail-value">${data.fullName}</div>
            </div>

            <div class="detail-row">
              <div class="detail-label">Phone Number</div>
              <div class="detail-value"><a href="tel:${data.phoneNumber}" style="color: #0E1E38; text-decoration: none; font-weight: bold;">${data.phoneNumber}</a></div>
            </div>

            <div class="detail-row">
              <div class="detail-label">Email Address</div>
              <div class="detail-value"><a href="mailto:${data.emailAddress}" style="color: #0E1E38; text-decoration: none;">${data.emailAddress}</a></div>
            </div>

            <div class="detail-row">
              <div class="detail-label">Subject</div>
              <div class="detail-value">${data.subject || 'General Enquiry'}</div>
            </div>

            <div class="detail-row" style="border-bottom: none;">
              <div class="detail-label">Customer Message</div>
              <div class="message-box">${data.message}</div>
            </div>

            <div class="actions">
              <a href="mailto:${data.emailAddress}?subject=Re: Enquiry with GO-PARTNER [${data.referenceId || ''}]" class="btn">Reply to Customer</a>
              <a href="tel:${data.phoneNumber}" class="btn btn-secondary">Call Customer</a>
            </div>
          </div>
          <div class="footer">
            Delivered automatically from the GO-PARTNER official website contact form.<br>
            Recipient: ${recipient}
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
NEW CONTACT ENQUIRY - GO-PARTNER
---------------------------------------
Reference ID : ${data.referenceId || 'N/A'}
Customer Name: ${data.fullName}
Phone Number : ${data.phoneNumber}
Email Address: ${data.emailAddress}
Subject      : ${data.subject}

Message:
${data.message}

Reply to customer: mailto:${data.emailAddress}
Call customer    : tel:${data.phoneNumber}
---------------------------------------
Delivered to: ${recipient}
  `.trim();

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: data.emailAddress,
      subject,
      text,
      html,
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Failed to send contact notification email:', error);
    return { success: false, error };
  }
}

/**
 * Send an email notification for a new Quote Request
 */
export async function sendQuoteNotificationEmail(data: QuoteEmailPayload) {
  const transporter = getEmailTransporter();
  const recipient = process.env.NOTIFICATION_EMAIL || OFFICIAL_INBOX;

  if (!transporter) {
    console.info(
      `[Email Notification Notice] New quote request from ${data.fullName} (${data.serviceType}). ` +
      `SMTP credentials not configured in .env; skipping automated email delivery to ${recipient}.`
    );
    return { success: false, reason: 'smtp_not_configured' };
  }

  const fromAddress = process.env.SMTP_FROM || `"GO-PARTNER Quotes" <${process.env.SMTP_USER}>`;
  const subject = `[New Quote Request] ${data.serviceType.toUpperCase()} - ${data.fullName}`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
          .header { background: #0E1E38; padding: 24px; text-align: center; }
          .header h1 { color: #ffffff; font-size: 22px; margin: 0; }
          .header p { color: #FF6B00; font-size: 13px; font-weight: 600; text-transform: uppercase; margin: 6px 0 0 0; }
          .content { padding: 32px 28px; }
          .price-badge { background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; padding: 8px 14px; border-radius: 8px; font-size: 15px; font-weight: 700; margin-bottom: 20px; display: inline-block; }
          .detail-row { margin-bottom: 14px; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px; }
          .detail-label { font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 600; }
          .detail-value { font-size: 15px; color: #0f172a; font-weight: 500; margin-top: 2px; }
          .route-box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; border-radius: 8px; margin: 16px 0; }
          .actions { margin-top: 28px; text-align: center; }
          .btn { display: inline-block; background: #FF6B00; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; margin: 4px; }
          .btn-secondary { background: #0E1E38; }
          .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>GO-PARTNER LOGISTICS</h1>
            <p>New Freight Quote Request</p>
          </div>
          <div class="content">
            ${data.estimatedCost ? `<div class="price-badge">Estimated Range: ${data.estimatedCost}</div>` : ''}

            <div class="detail-row">
              <div class="detail-label">Customer Name & Company</div>
              <div class="detail-value">${data.fullName} ${data.companyName ? `(${data.companyName})` : ''}</div>
            </div>

            <div class="detail-row">
              <div class="detail-label">Contact Details</div>
              <div class="detail-value">
                <a href="tel:${data.phoneNumber}" style="color: #0E1E38; font-weight: bold;">${data.phoneNumber}</a> | 
                <a href="mailto:${data.emailAddress}" style="color: #0E1E38;">${data.emailAddress}</a>
              </div>
            </div>

            <div class="route-box">
              <div style="font-weight: 600; color: #0E1E38; margin-bottom: 8px;">Route & Cargo Details:</div>
              <div>📍 <strong>Pickup:</strong> ${data.pickupLocation}</div>
              <div style="margin-top: 4px;">🏁 <strong>Delivery:</strong> ${data.deliveryLocation}</div>
              <div style="margin-top: 8px;">🚛 <strong>Service:</strong> ${data.serviceType}</div>
              ${data.cargoWeight ? `<div>⚖️ <strong>Weight:</strong> ${data.cargoWeight}</div>` : ''}
              ${data.cargoType ? `<div>📦 <strong>Cargo Type:</strong> ${data.cargoType}</div>` : ''}
            </div>

            ${data.notes ? `
            <div class="detail-row">
              <div class="detail-label">Customer Notes</div>
              <div class="detail-value">${data.notes}</div>
            </div>
            ` : ''}

            <div class="actions">
              <a href="tel:${data.phoneNumber}" class="btn">Call Customer</a>
              <a href="mailto:${data.emailAddress}?subject=GO-PARTNER Freight Quote [${data.referenceId || ''}]" class="btn btn-secondary">Send Formal Quote</a>
            </div>
          </div>
          <div class="footer">
            Delivered automatically from the GO-PARTNER website.<br>
            Recipient: ${recipient}
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
NEW FREIGHT QUOTE REQUEST - GO-PARTNER
---------------------------------------
Customer: ${data.fullName} ${data.companyName ? `(${data.companyName})` : ''}
Phone   : ${data.phoneNumber}
Email   : ${data.emailAddress}
Service : ${data.serviceType}
Pickup  : ${data.pickupLocation}
Delivery: ${data.deliveryLocation}
Weight  : ${data.cargoWeight || 'Not specified'}
Cargo   : ${data.cargoType || 'Not specified'}
Estimate: ${data.estimatedCost || 'N/A'}
Notes   : ${data.notes || 'None'}

Reply: mailto:${data.emailAddress}
Call : tel:${data.phoneNumber}
---------------------------------------
Delivered to: ${recipient}
  `.trim();

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: data.emailAddress,
      subject,
      text,
      html,
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Failed to send quote notification email:', error);
    return { success: false, error };
  }
}
