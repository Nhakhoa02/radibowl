"use client"

import Image from "next/image"
import { ArrowLeft, ArrowRight, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { OrderState, Dish } from "@/app/order/page"

interface AddDishesStepProps {
  orderState: OrderState
  updateOrderState: (updates: Partial<OrderState>) => void
  onNext: () => void
  onPrevious: () => void
}

const dishes: Dish[] = [
  {
    id: "1",
    name: "Salad Gà Xé",
    description: "Ức gà, xà lách, cà rốt, dưa leo, bắp, khoai lang, sốt (Yogurt/ Mayo)",
    // calories: " ~500 kcal | ~23g protein",
    price: 40000,
    image: "/product-fit1.jpg",
    badge: "Best seller",
  },
  {
    id: "2",
    name: "Gà Teriyaki + Lức Nâu",
    description: "Ức gà, gạo lứt, Broccoli, cà rốt, dầu, sốt Teriyaki, xì dầu, đường, tỏi, nước",
    // calories: "~540 kcal | ~23g protein",
    price: 40000,
    image: "/product-meat.jpg",
    badge: "Mới",
  },
  {
    id: "3",
    name: "Phở trộn bò (Beef mix gà)",
    description: "Thịt bò, ức gà, bánh phở, rau sống, dầu, sốt trộn, nước mắm, chanh, đường, tỏi",
    // calories: "~550 kcal | ~24g protein",
    price: 40000,
    image: "/product-slim.jpg",
    badge: "",
  },
  {
    id: "4",
    name: "Kimbap gà áp chảo (gạo lức)",
    description: "Ức gà, gạo lứt, trứng, cà rốt, dưa leo, rong biển, dầu, sốt (Yogurt/ Mayo)",
    // calories: "~520–540 kcal | ~23g protein",
    price: 40000,
    image: "/product-chay.jpg",
    badge: "Ngon!!",
  },
  {
    id: "5",
    name: "Nui xào thịt băm",
    description: "Thịt băm, nui, cà rốt, đậu que, bắp, dầu, sốt (Tương cà + xì dầu nhẹ)",
    // calories: "~540–560 kcal | ~22g protein",
    price: 40000,
    image: "/product-full.jpg",
    badge: "",
  },
  {
    id: "6",
    name: "Gà sốt tỏi rau củ",
    description: "Ức gà, gạo lứt, broccoli, cà rốt, đậu que, dầu, sốt tỏi, xì dầu, đường, tỏi, nước",
    // calories: "~540–560 kcal | ~23g protein",
    price: 40000,
    image: "/product-lunch.jpg",
    badge: "",
  },
]

function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN").format(price / 1000) + "k"
}

export function AddDishesStep({
  orderState,
  updateOrderState,
  onNext,
  onPrevious,
}: AddDishesStepProps) {
  const getQuantity = (dishId: string): number => {
    const found = orderState.selectedDishes.find((d) => d.dish.id === dishId)
    return found?.quantity || 0
  }

  const addDish = (dish: Dish) => {
    const existing = orderState.selectedDishes.find((d) => d.dish.id === dish.id)
    if (existing) {
      updateOrderState({
        selectedDishes: orderState.selectedDishes.map((d) =>
          d.dish.id === dish.id ? { ...d, quantity: d.quantity + 1 } : d
        ),
      })
    } else {
      updateOrderState({
        selectedDishes: [...orderState.selectedDishes, { dish, quantity: 1 }],
      })
    }
  }

  const removeDish = (dishId: string) => {
    const existing = orderState.selectedDishes.find((d) => d.dish.id === dishId)
    if (existing && existing.quantity > 1) {
      updateOrderState({
        selectedDishes: orderState.selectedDishes.map((d) =>
          d.dish.id === dishId ? { ...d, quantity: d.quantity - 1 } : d
        ),
      })
    } else {
      updateOrderState({
        selectedDishes: orderState.selectedDishes.filter((d) => d.dish.id !== dishId),
      })
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-3 font-serif">
          Thêm Món & Ghi Chú
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Tùy chỉnh bữa ăn của bạn với danh sách món phụ bổ sung đầy đủ dinh dưỡng.
        </p>
      </div>

      <div className="space-y-4">
        {dishes.map((dish) => {
          const quantity = getQuantity(dish.id)

          return (
            <div
              key={dish.id}
              className="bg-white rounded-2xl p-4 shadow-sm flex gap-4"
            >
              <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{dish.name}</h3>
                    {dish.badge && (
                      <span className="text-xs font-medium text-primary">
                        {dish.badge}
                      </span>
                    )}
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {dish.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-lg font-bold text-primary">
                      {formatPrice(dish.price)}
                    </span>
                    {quantity > 0 ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeDish(dish.id)}
                          className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-6 text-center font-medium">{quantity}</span>
                        <button
                          onClick={() => addDish(dish)}
                          className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addDish(dish)}
                        className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <h3 className="font-semibold text-foreground">Ghi chú thêm</h3>
        </div>
        <textarea
          value={orderState.notes}
          onChange={(e) => updateOrderState({ notes: e.target.value })}
          placeholder="Ghi chú về dị ứng, sở thích giao hàng hoặc yêu cầu đặc biệt..."
          className="w-full h-32 p-4 bg-muted rounded-xl resize-none text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <div className="text-right text-xs text-muted-foreground mt-2">
          EDITORIAL KITCHEN
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <button
          onClick={onPrevious}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Quay lại</span>
        </button>
        <Button
          onClick={onNext}
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6"
        >
          Tiếp theo: Thông tin giao hàng
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  )
}
