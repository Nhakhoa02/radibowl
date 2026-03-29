import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  services: [
    { label: "Gói Ngày", href: "/menu" },
    { label: "Gói Tuần", href: "/menu" },
    { label: "Gói Tháng", href: "/menu" },
    { label: "Thực đơn tuần này", href: "/menu" },
  ],
  company: [
    // { label: "Về chúng tôi", href: "/about-us" },
    // { label: "Blog", href: "#" },
    // { label: "Tuyển dụng", href: "#" },
    { label: "Liên hệ", href: "#contact" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    // { label: "Chính sách giao hàng", href: "#" },
    // { label: "Điều khoản sử dụng", href: "#" },
    // { label: "Chính sách bảo mật", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61578661955656", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/redibowl/", label: "Instagram" },
  // { icon: Youtube, href: "https://youtube.com/redibowlvn", label: "Youtube" },
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
              <span className="text-xl font-bold text-card">REDIBOWL</span>
            </Link>
            <p className="text-card/70 leading-relaxed mb-6 max-w-sm">
              RediBowl - Dự án khởi nghiệp bởi nhóm 14 sinh viên VGU.
              Mang đến bữa ăn dinh dưỡng, tiện lợi và hợp túi tiền cho cộng đồng sinh viên.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:0901234567" className="flex items-center gap-3 text-card/80 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                090 123 4567
              </a>
              <a href="mailto:redibowl4@gmail.com" className="flex items-center gap-3 text-card/80 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                redibowl4@gmail.com
              </a>
              <div className="flex items-start gap-3 text-card/80">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>VGU Campus, Ring Road 4, Thới Hòa, Bến Cát, Bình Dương</span>
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
            <h4 className="text-lg font-semibold mb-4">Sản phẩm</h4>
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
            <h4 className="text-lg font-semibold mb-4">Teams</h4>
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
            © 2026 RediBowl VGU. All rights reserved.
          </p>
          <p className="text-card/60 text-sm">
            Made with ❤️ by 14 VGU-ers!
          </p>
        </div>
      </div>
    </footer>
  )
}
