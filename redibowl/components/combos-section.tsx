"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"

const combos = [
  {
    name: "Gói Ngày",
    description: "Đặt từng ngày, linh hoạt cho sinh viên bận rộn.",
    price: "39k+ / bữa",
    features: [
      "1 hộp cơm mỗi ngày",
      "Chọn đạm tuỳ thích",
      "Giao tận phòng",
      "Không cam kết"
    ],
    popular: false,
    badge: null
  },
  {
    name: "Gói Tuần",
    description: "5 bữa trưa từ thứ 2 đến thứ 6, tiết kiệm thời gian.",
    price: "185k / tuần",
    features: [
      "5 bữa liên tiếp (T2-T6)",
      // "Tiết kiệm ~10% so với lẻ",
      "Thực đơn xoay vòng",
      "Thông báo giao hàng"
    ],
    popular: true,
    badge: "🔥 Đặc biệt"
  },
  {
    name: "Gói Tháng",
    description: "20 bữa cơm trưa dinh dưỡng, giải pháp tiết kiệm nhất.",
    price: "680k / tháng",
    features: [
      "20 bữa trọn tháng",
      // "Tiết kiệm ~15%",
      "Ưu tiên menu mới",
      "Hỗ trợ điều chỉnh khẩu vị"
    ],
    popular: false,
    badge: null
  }
]

export function CombosSection() {
  return (
    <section id="combos" className="py-24 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 text-white">
          <span className="text-primary font-bold uppercase tracking-[0.2em] block mb-4 text-sm">Gói Ăn & Tiết Kiệm</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Lựa chọn phù hợp nhất</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            RediBowl cung cấp nhiều gói ăn linh hoạt, được thiết kế chuyên biệt cho sinh viên VGU – giúp bạn tiết kiệm thời gian và ngân sách.
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {combos.map((combo) => {
            const priceParts = combo.price.split(" / ")
            return (
              <div
                key={combo.name}
                className={`relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 text-center ${combo.popular
                  ? "bg-white border-primary shadow-2xl scale-105 z-10"
                  : "bg-white/5 border-white/10 text-white"
                  }`}
              >
                {combo.badge && (
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-primary text-primary-foreground rounded-2xl text-[10px] font-black shadow-xl border-4 border-foreground whitespace-nowrap uppercase tracking-[0.2em] flex flex-col items-center justify-center min-w-fit leading-tight z-20">
                    <span className="text-sm">{combo.badge}</span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-3xl font-black mb-3 ${combo.popular ? "text-foreground" : "text-white"}`}>
                    {combo.name}
                  </h3>
                  <p className={`${combo.popular ? "text-muted-foreground" : "text-white/60"} text-lg leading-snug mx-auto max-w-[200px]`}>
                    {combo.description}
                  </p>
                </div>

                <div className="mb-10 flex flex-col items-center justify-center">
                  <span className={`text-5xl font-black block leading-none ${combo.popular ? "text-primary" : "text-primary"}`}>
                    {priceParts[0]}
                  </span>
                  {priceParts[1] && (
                    <span className={`text-2xl font-bold block mt-3 opacity-80 ${combo.popular ? "text-primary" : "text-primary"}`}>
                      / {priceParts[1]}
                    </span>
                  )}
                </div>

                <ul className="space-y-6 mb-12 flex-grow text-left">
                  {combo.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className={`mt-1 rounded-full p-1 shadow-sm ${combo.popular ? "bg-primary/10" : "bg-primary/20"}`}>
                        <Check className={`w-4 h-4 ${combo.popular ? "text-primary" : "text-primary"}`} />
                      </div>
                      <span className={`${combo.popular ? "text-foreground/80 font-medium" : "text-white/80"} text-lg`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className={`w-full rounded-2xl font-black h-16 text-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${combo.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30"
                    : "bg-white text-secondary hover:bg-white/90 shadow-lg"
                    }`}
                >
                  <Link href="/menu">Khám Phá Menu</Link>
                </Button>
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20">
          <Link href="/menu" className="inline-flex items-center gap-3 text-white/50 hover:text-white font-black text-lg transition-all group">
            Xem trọn bộ thực đơn linh hoạt
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
