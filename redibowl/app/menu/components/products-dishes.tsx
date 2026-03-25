"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Flame } from "lucide-react"
import Link from "next/link"

const onClick = () => {

}

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

export function ProductsDishes() {
  return (
    <section id="dishes" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider block mb-2">Thực đơn đa dạng</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Món ăn tươi ngon mỗi tuần</h2>
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
              className="group bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {dish.badge && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-medium">
                    {dish.badge}
                  </Badge>
                )}
                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-foreground text-xs font-bold border border-border flex items-center gap-1.5 shadow-md">
                  <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                  {dish.calories}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight pr-4">
                    {dish.name}
                  </h3>
                  <span className="text-primary font-bold shrink-0">
                    {dish.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {dish.description}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Button className="flex-1 rounded-full font-bold shadow-sm shadow-primary/20">
                    <Link href="/order">Chọn món này</Link>
                  </Button>
                  <Button variant="outline" className="rounded-full px-4 hover:bg-secondary border-border/50">
                    Chi tiết
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="ghost"
            className="rounded-full text-primary hover:bg-primary/10 font-bold"
          >
            Tải PDF Thực đơn Tuần tới
          </Button>
        </div>
      </div>
    </section>
  )
}
