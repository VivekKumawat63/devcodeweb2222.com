import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Design", href: "/services#web-design" },
      { name: "Web Development", href: "/services#web-development" },
      { name: "UI/UX Design", href: "/services#ui-ux" },
      { name: "Digital Marketing", href: "/services#marketing" },
      { name: "SEO Services", href: "/services#seo" },
    ],
  },
  {
    title: "Contact Info",
    links: [
      { name: "Jaipur, Rajasthan, India", href: "#", icon: MapPin },
      { name: "+91 9785343142", href: "tel:+919785343142", icon: Phone },
      { name: "vivekkumawat184563@gmail.com", href: "mailto:vivekkumawat184563@gmail.com", icon: Mail },
    ],
  },
]

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/devcodeweb", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com/devcodeweb", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/devcodeweb", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/company/devcodeweb", icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="font-heading font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DEVCODEWEB
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creating beautiful digital experiences that drive results and help businesses grow in the digital world.
              Led by CEO Nikhil Kumawat & Co-Founder Vivek Kumawat in Jaipur, Rajasthan.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-heading font-semibold text-lg text-white relative pb-2">
                {section.title}
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary" />
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      {link.icon && <link.icon className="h-4 w-4" />}
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 DEVCODEWEB. All Rights Reserved. Built with ❤️ using Next.js by CEO Nikhil Kumawat & Co-Founder Vivek
            Kumawat
          </p>
        </div>
      </div>
    </footer>
  )
}
