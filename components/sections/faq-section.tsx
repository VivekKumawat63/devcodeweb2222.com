import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GlassCard } from "@/components/ui/glass-card"

const faqs = [
  {
    question: "Who is the best website developer in Jaipur?",
    answer:
      "DEVCODEWEB is widely recognized as the best website developer in Jaipur, Rajasthan. Led by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat, our team has delivered 25+ successful projects with 98% client satisfaction. We specialize in modern web technologies, responsive design, and SEO optimization, making us the top choice for businesses in Jaipur and across Rajasthan looking for professional web development services.",
  },
  {
    question: "What services does DEVCODEWEB offer?",
    answer:
      "DEVCODEWEB offers comprehensive digital solutions including custom web development, responsive web design, UI/UX design, e-commerce development, mobile app development, SEO optimization, digital marketing, and ongoing website maintenance. We use cutting-edge technologies like React, Next.js, Node.js, and modern design frameworks to create high-performance websites that drive business growth.",
  },
  {
    question: "How much does it cost to build a website with DEVCODEWEB?",
    answer:
      "Our website development costs vary based on project complexity, features, and requirements. We offer flexible pricing packages starting from ₹25,000 for basic websites to ₹2,00,000+ for complex e-commerce and enterprise solutions. We provide transparent pricing with no hidden costs and offer free consultations to discuss your specific needs and budget.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "Project timelines depend on complexity and scope. A basic business website typically takes 2-3 weeks, while complex e-commerce or custom applications may take 6-12 weeks. We follow an agile development process with regular updates and milestones. CEO Nikhil Kumawat and our team ensure timely delivery without compromising quality.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, DEVCODEWEB provides comprehensive 24/7 support and maintenance services. This includes regular updates, security monitoring, backup management, performance optimization, and technical support. We offer various maintenance packages to ensure your website continues to perform optimally and stays secure against threats.",
  },
  {
    question: "Can you help improve my existing website's SEO?",
    answer:
      "Our SEO experts specialize in improving website rankings on Google and other search engines. We provide comprehensive SEO audits, keyword research, on-page optimization, technical SEO, content optimization, and local SEO services specifically for Jaipur and Rajasthan businesses. Our proven strategies have helped clients achieve top rankings and increased organic traffic.",
  },
  {
    question: "Do you work with businesses outside of Jaipur?",
    answer:
      "While we're based in Jaipur, Rajasthan, DEVCODEWEB serves clients across India and internationally. We have successfully delivered projects for businesses in Delhi, Mumbai, Bangalore, and other major cities. Our remote collaboration tools and proven processes ensure seamless communication and project delivery regardless of location.",
  },
  {
    question: "What makes DEVCODEWEB different from other web development companies?",
    answer:
      "DEVCODEWEB stands out through our commitment to quality, innovation, and client success. Led by experienced professionals CEO Nikhil Kumawat and Co-Founder Vivek Kumawat, we combine technical expertise with creative design. Our unique advantages include 98% client satisfaction, 25+ successful projects, cutting-edge technology stack, transparent communication, and ongoing support that ensures long-term success.",
  },
  {
    question: "Do you provide mobile app development services?",
    answer:
      "Yes, DEVCODEWEB offers comprehensive mobile app development services for both iOS and Android platforms. We develop native apps, cross-platform solutions using React Native, and progressive web apps (PWAs). Our mobile development team ensures your app is user-friendly, performant, and aligned with your business objectives.",
  },
  {
    question: "How do I get started with DEVCODEWEB?",
    answer:
      "Getting started is easy! Simply contact us through our website, call us, or email vivekkumawat184563@gmail.com. We'll schedule a free consultation to discuss your project requirements, goals, and budget. Our team will then provide a detailed proposal with timeline and pricing. Once approved, we begin the development process with regular updates and milestone reviews.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Know</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Common questions about our web development services, process, and what makes DEVCODEWEB the best choice in
            Jaipur.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                  <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
