"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Flame, ArrowRight } from "lucide-react"

const dishes = [
  {
    id: 1,
    name: "Salad Gà Xé",
    description: "Ức gà, xà lách, cà rốt, dưa leo, bắp, khoai lang, sốt (Yogurt/ Mayo)",
    calories: " ~500 kcal | ~23g protein",
    price: "40,000đ",
    image: "/product-fit1.jpg",
    badge: "Best seller",
  },
  {
    id: 2,
    name: "Gà Teriyaki + Lức Nâu",
    description: "Ức gà, gạo lứt, Broccoli, cà rốt, dầu, sốt Teriyaki, xì dầu, đường, tỏi, nước",
    calories: "~540 kcal | ~23g protein",
    price: "40,000đ",
    image: "/product-meat.jpg",
    badge: "Mới",
  },
  {
    id: 3,
    name: "Phở trộn bò (Beef mix gà)",
    description: "Thịt bò, ức gà, bánh phở, rau sống, dầu, sốt trộn, nước mắm, chanh, đường, tỏi",
    calories: "~550 kcal | ~24g protein",
    price: "40,000đ",
    image: "/product-slim.jpg",
    badge: null,
  },
  {
    id: 4,
    name: "Kimbap gà áp chảo (gạo lức)",
    description: "Ức gà, gạo lứt, trứng, cà rốt, dưa leo, rong biển, dầu, sốt (Yogurt/ Mayo)",
    calories: "~520–540 kcal | ~23g protein",
    price: "40,000đ",
    image: "/product-chay.jpg",
    badge: "Chay",
  },
  {
    id: 5,
    name: "Nui xào thịt băm",
    description: "Thịt băm, nui, cà rốt, đậu que, bắp, dầu, sốt (Tương cà + xì dầu nhẹ)",
    calories: "~540–560 kcal | ~22g protein",
    price: "40,000đ",
    image: "/product-full.jpg",
    badge: null,
  },
  {
    id: 6,
    name: "Gà sốt tỏi rau củ",
    description: "Ức gà, gạo lứt, broccoli, cà rốt, đậu que, dầu, sốt tỏi, xì dầu, đường, tỏi, nước",
    calories: "~540–560 kcal | ~23g protein",
    price: "40,000đ",
    image: "/product-lunch.jpg",
    badge: "Low-carb",
  },
]

export function ProductsSection() {
  return (
    <section id="dishes" className="py-24 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] block mb-4 text-sm">Thực đơn đa dạng</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Món ăn tươi ngon mỗi tuần</h2>
          <p className="text-muted-foreground text-lg">
            Hàng tuần chúng tôi thay đổi thực đơn để bạn không bị ngán.
            Các món ăn được chế biến từ nguyên liệu tươi sạch, cân bằng dinh dưỡng.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {dish.badge && (
                  <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {dish.badge}
                  </Badge>
                )}
                <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-md px-4 py-2 rounded-2xl text-foreground text-xs font-black border border-border/50 flex items-center gap-2 shadow-xl">
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                  {dish.calories}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex flex-col mb-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-2xl font-black group-hover:text-primary transition-colors pr-4 leading-tight">
                      {dish.name}
                    </h3>
                    <span className="text-xl font-black text-primary whitespace-nowrap shrink-0">
                      {dish.price}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                  {dish.description}
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <Button asChild className="flex-1 rounded-2xl h-12 font-bold shadow-lg shadow-primary/20 transition-transform active:scale-95">
                    <Link href="/menu">Chọn món</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl h-12 px-6 hover:bg-secondary border-border/50 font-bold transition-all active:scale-95">
                    <Link href="/menu">Chi tiết</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center mt-16">
          <Link href="/menu" className="inline-flex items-center gap-3 text-primary hover:text-primary/80 font-black text-lg transition-all group">
            Khám phá trọn bộ thực đơn tuần này!
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
