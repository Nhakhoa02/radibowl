"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    name: "Gói FIT 3",
    description: "Trưa - Tối. Best seller",
    price: "650,000đ",
    image: "/product-fit3.jpg",
    badge: "Best Seller",
    popular: true,
  },
  {
    name: "Gói FULL",
    description: "3 bữa/ngày. Giữ cân healthy",
    price: "825,000đ",
    image: "/product-full.jpg",
    badge: null,
    popular: false,
  },
  {
    name: "Gói FIT 1",
    description: "Sáng - Trưa. Giảm cân",
    price: "650,000đ",
    image: "/product-fit1.jpg",
    badge: "Giảm cân",
    popular: false,
  },
  {
    name: "Gói MEAT",
    description: "Gấp 1.5 lượng thịt. Tăng cơ",
    price: "950,000đ",
    image: "/product-meat.jpg",
    badge: "Tăng cơ",
    popular: false,
  },
  {
    name: "Gói SLIM",
    description: "Gấp đôi rau, KO tinh bột",
    price: "600,000đ",
    image: "/product-slim.jpg",
    badge: "Low Carb",
    popular: false,
  },
  {
    name: "Gói FIT 2",
    description: "Sáng - Tối. Giảm cân",
    price: "650,000đ",
    image: "/product-fit2.jpg",
    badge: null,
    popular: false,
  },
  {
    name: "Gói MEAT-S",
    description: "Gói Meat thêm phần sáng",
    price: "1,225,000đ",
    image: "/product-meats.jpg",
    badge: "Premium",
    popular: false,
  },
  {
    name: "Gói CHAY",
    description: "2 bữa chay thanh đạm",
    price: "650,000đ",
    image: "/product-chay.jpg",
    badge: "Vegetarian",
    popular: false,
  },
  {
    name: "Gói LUNCH",
    description: "1 bữa trưa. Giao NÓNG",
    price: "349,000đ",
    image: "/product-lunch.jpg",
    badge: "Giao nóng",
    popular: false,
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider">Thực đơn</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Sản phẩm tiêu biểu
          </h2>
          <p className="text-muted-foreground text-lg">
            Fitfood cung cấp nhiều gói ăn và thực phẩm dùng kèm đa dạng phù hợp với mọi nhu cầu của bạn
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.name} 
              className={`group bg-background rounded-2xl overflow-hidden border transition-all hover:shadow-xl ${
                product.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge 
                    className={`absolute top-4 left-4 ${
                      product.popular 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Link href="/order">
                    <Button 
                      className={`rounded-full ${
                        product.popular 
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                          : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                      }`}
                    >
                      Đặt ngay
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/order">
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Xem tất cả sản phẩm
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
