import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  services: [
    { label: "Gói Ngày", href: "/menu#combos" },
    { label: "Gói Tuần", href: "/menu#combos" },
    { label: "Gói Tháng", href: "/menu#combos" },
    { label: "Thực đơn tuần", href: "/menu#dishes" },
  ],
  company: [
    { label: "Về chúng tôi", href: "/about-us" },
    { label: "Blog", href: "#" },
    { label: "Tuyển dụng", href: "#" },
    { label: "Liên hệ", href: "#contact" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    { label: "Chính sách giao hàng", href: "#" },
    { label: "Điều khoản sử dụng", href: "#" },
    { label: "Chính sách bảo mật", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/fitfoodvn", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/fitfoodvn", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/fitfoodvn", label: "Youtube" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-card">RediBowl</span>
            </Link>
            <p className="text-card/70 leading-relaxed mb-6 max-w-sm">
              Redi to Eat. Redi to Live. 
              Giải pháp bữa ăn lành mạnh giao tận nơi ký túc xá cho sinh viên VGU.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:1900633345" className="flex items-center gap-3 text-card/80 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                1900 633 345
              </a>
              <a href="mailto:info@fitfood.vn" className="flex items-center gap-3 text-card/80 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                info@fitfood.vn
              </a>
              <div className="flex items-start gap-3 text-card/80">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>123 Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Gói ăn</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-card/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Công ty</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-card/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-card/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-card/60 text-sm">
            © 2026 RediBowl Vietnam. All rights reserved.
          </p>
          <p className="text-card/60 text-sm">
            Made with ❤️ in Saigon
          </p>
        </div>
      </div>
    </footer>
  )
}
