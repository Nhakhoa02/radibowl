"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

const combos = [
  {
    name: "Gói Ngày",
    description: "Đặt từng ngày, linh hoạt",
    price: "39k – 49k / bữa",
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
    description: "5 bữa / tuần, đặt 1 lần",
    price: "185k / tuần",
    features: [
      "5 bữa liên tiếp (T2-T6)",
      "Tiết kiệm ~10% so với lẻ",
      "Thực đơn xoay vòng",
      "Thông báo giao hàng"
    ],
    popular: true,
    badge: "⭐ Phổ biến"
  },
  {
    name: "Gói Tháng",
    description: "20 bữa / tháng, tiết kiệm nhất",
    price: "680k / tháng",
    features: [
      "20 bữa trọn tháng",
      "Tiết kiệm ~15%",
      "Ưu tiên menu mới",
      "Hỗ trợ điều chỉnh khẩu vị"
    ],
    popular: false,
    badge: null
  }
]

export function ProductsSection() {
  return (
    <section id="combos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider">Tiết kiệm hơn</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Các gói ăn phổ biến
          </h2>
          <p className="text-muted-foreground text-lg">
            Chọn gói ăn phù hợp để được hưởng mức giá ưu đãi và dịch vụ giao hàng tận nơi tốt nhất.
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <div
              key={combo.name}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all hover:shadow-2xl ${combo.popular
                ? "bg-background border-primary shadow-xl ring-4 ring-primary/5 scale-105 z-10"
                : "bg-background/50 border-border"
                }`}
            >
              {combo.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-bold shadow-lg">
                  {combo.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{combo.name}</h3>
                <p className="text-muted-foreground">{combo.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-3xl font-bold text-primary">{combo.price}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {combo.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80">
                    <div className="mt-1 bg-primary/10 rounded-full p-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={`w-full rounded-full font-bold h-12 ${combo.popular
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
              >
                <Link href="/order">Đặt gói này</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
