import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactEmailData {
  name: string
  email: string
  company?: string
  service: string
  budget?: string
  message: string
}

export async function sendContactNotification(data: ContactEmailData) {
  try {
    // Send notification to admin
    const adminEmail = await resend.emails.send({
      from: "DEVCODEWEB <noreply@devcodeweb.com>",
      to: ["vivekkumawat184563@gmail.com"],
      subject: `New Contact Form Submission - ${data.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">From DEVCODEWEB Website</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #374151; margin-top: 0; font-size: 24px; border-bottom: 2px solid #e5e7eb; padding-bottom: 15px;">Contact Details</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; font-size: 16px;">Name:</strong>
              <p style="margin: 5px 0 0 0; font-size: 16px; color: #374151;">${data.name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; font-size: 16px;">Email:</strong>
              <p style="margin: 5px 0 0 0; font-size: 16px; color: #374151;">
                <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
              </p>
            </div>
            
            ${
              data.company
                ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; font-size: 16px;">Company:</strong>
              <p style="margin: 5px 0 0 0; font-size: 16px; color: #374151;">${data.company}</p>
            </div>
            `
                : ""
            }
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; font-size: 16px;">Service Needed:</strong>
              <p style="margin: 5px 0 0 0; font-size: 16px; color: #374151;">${data.service.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</p>
            </div>
            
            ${
              data.budget
                ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; font-size: 16px;">Budget:</strong>
              <p style="margin: 5px 0 0 0; font-size: 16px; color: #374151;">${data.budget.replace("-", " - ").replace(/\b\w/g, (l) => l.toUpperCase())}</p>
            </div>
            `
                : ""
            }
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; font-size: 16px;">Message:</strong>
              <div style="margin: 10px 0 0 0; padding: 15px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #667eea;">
                <p style="margin: 0; font-size: 16px; color: #374151; line-height: 1.6;">${data.message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px;">
            <p>This email was sent from the DEVCODEWEB contact form.</p>
            <p>Best Website Developer in Jaipur | CEO: Nikhil Kumawat | Co-Founder: Vivek Kumawat</p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to client
    const clientEmail = await resend.emails.send({
      from: "DEVCODEWEB <noreply@devcodeweb.com>",
      to: [data.email],
      subject: "Thank you for contacting DEVCODEWEB - We'll be in touch soon!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Thank You, ${data.name}!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Your message has been received</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #374151; margin-top: 0; font-size: 24px;">What happens next?</h2>
            
            <div style="margin: 25px 0;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 30px; height: 30px; background: #667eea; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">1</div>
                <p style="margin: 0; color: #374151; font-size: 16px;">We'll review your project requirements within 2-4 hours</p>
              </div>
              
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 30px; height: 30px; background: #667eea; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">2</div>
                <p style="margin: 0; color: #374151; font-size: 16px;">Schedule a free consultation call to discuss your vision</p>
              </div>
              
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 30px; height: 30px; background: #667eea; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">3</div>
                <p style="margin: 0; color: #374151; font-size: 16px;">Receive a detailed proposal with timeline and pricing</p>
              </div>
              
              <div style="display: flex; align-items: center;">
                <div style="width: 30px; height: 30px; background: #667eea; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">4</div>
                <p style="margin: 0; color: #374151; font-size: 16px;">Start building your amazing digital presence!</p>
              </div>
            </div>
            
            <div style="background: #f0f4ff; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 25px 0;">
              <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 18px;">Your Project Summary:</h3>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Service:</strong> ${data.service.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</p>
              ${data.budget ? `<p style="margin: 5px 0; color: #6b7280;"><strong>Budget:</strong> ${data.budget.replace("-", " - ").replace(/\b\w/g, (l) => l.toUpperCase())}</p>` : ""}
              ${data.company ? `<p style="margin: 5px 0; color: #6b7280;"><strong>Company:</strong> ${data.company}</p>` : ""}
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #374151; font-size: 16px; margin-bottom: 20px;">
                Have questions? Feel free to reply to this email or call us directly.
              </p>
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                <strong>CEO:</strong> Nikhil Kumawat | <strong>Co-Founder:</strong> Vivek Kumawat<br>
                <strong>Email:</strong> vivekkumawat184563@gmail.com<br>
                <strong>Best Website Developer in Jaipur, Rajasthan</strong>
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px;">
            <p>DEVCODEWEB - Transforming Digital Experiences Since 2019</p>
            <p>500+ Projects Delivered | 98% Client Satisfaction | 24/7 Support</p>
          </div>
        </div>
      `,
    })

    return { success: true, adminEmail, clientEmail }
  } catch (error) {
    console.error("Email sending error:", error)
    throw error
  }
}

export async function sendNewsletterWelcome(email: string) {
  try {
    const result = await resend.emails.send({
      from: "DEVCODEWEB <noreply@devcodeweb.com>",
      to: [email],
      subject: "Welcome to DEVCODEWEB Newsletter - Stay Updated with Latest Web Development Trends!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Welcome to DEVCODEWEB!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Thank you for subscribing to our newsletter</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #374151; margin-top: 0; font-size: 24px;">What to expect:</h2>
            
            <ul style="color: #374151; font-size: 16px; line-height: 1.6;">
              <li style="margin-bottom: 10px;">Latest web development trends and technologies</li>
              <li style="margin-bottom: 10px;">Expert tips from CEO Nikhil Kumawat & Co-Founder Vivek Kumawat</li>
              <li style="margin-bottom: 10px;">Case studies from our 500+ successful projects</li>
              <li style="margin-bottom: 10px;">Exclusive insights about digital marketing in Jaipur</li>
              <li style="margin-bottom: 10px;">Special offers and early access to our services</li>
            </ul>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #374151; font-size: 16px;">
                Ready to transform your digital presence?
              </p>
              <a href="https://devcodeweb.com/contact" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin-top: 15px;">
                Start Your Project
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px;">
            <p>DEVCODEWEB - Best Website Developer in Jaipur, Rajasthan</p>
            <p>You can unsubscribe at any time by replying to this email.</p>
          </div>
        </div>
      `,
    })

    return { success: true, result }
  } catch (error) {
    console.error("Newsletter email error:", error)
    throw error
  }
}
