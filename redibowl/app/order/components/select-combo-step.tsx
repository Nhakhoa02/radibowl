"use client"

import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { OrderState, Combo } from "@/app/order/page"

interface SelectComboStepProps {
  orderState: OrderState
  updateOrderState: (updates: Partial<OrderState>) => void
  onNext: () => void
}

const combos: Combo[] = [
  {
    id: "daily",
    name: "Gói Ngày",
    description: "Linh hoạt cho sinh viên bận rộn",
    price: 39000,
    image: "/product-fit1.jpg",
  },
  {
    id: "weekly",
    name: "Gói Tuần",
    description: "5 bữa trưa từ Thứ 2 - Thứ 6",
    price: 185000,
    image: "/product-full.jpg",
    popular: true,
  },
  {
    id: "monthly",
    name: "Gói Tháng",
    description: "20 bữa cơm trưa dinh dưỡng",
    price: 680000,
    image: "/product-lunch.jpg",
  },
]

function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN").format(price) + "đ"
}

export function SelectComboStep({
  orderState,
  updateOrderState,
  onNext,
}: SelectComboStepProps) {
  const handleSelectCombo = (combo: Combo) => {
    updateOrderState({ selectedCombo: combo })
  }

  const canProceed = orderState.selectedCombo !== null

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-3 font-serif">
          Chọn Combo Của Bạn
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Khám phá những sự kết hợp hoàn hảo được thiết kế bởi các đầu bếp hàng đầu.
          Chọn một combo để bắt đầu hành trình vị giác của bạn.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {combos.map((combo) => {
          const isSelected = orderState.selectedCombo?.id === combo.id

          return (
            <div
              key={combo.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md ${isSelected ? "ring-2 ring-primary" : ""
                }`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={combo.image}
                  alt={combo.name}
                  fill
                  className="object-cover"
                />
                {combo.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    PHỔ BIẾN
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {combo.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {combo.description}
                </p>
                <div className="text-2xl font-bold text-primary mb-4">
                  {formatPrice(combo.price)}
                </div>
                <Button
                  variant={isSelected ? "default" : "outline"}
                  className={`w-full rounded-full ${isSelected
                    ? "bg-primary hover:bg-primary/90"
                    : "border-primary text-primary hover:bg-primary/10"
                    }`}
                  onClick={() => handleSelectCombo(combo)}
                >
                  {isSelected ? "Đã Chọn" : "Chọn Combo"}
                </Button>
              </div>
            </div>
          )
        })}
      </div>

      {orderState.selectedCombo && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 lg:p-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Gói đã chọn:</div>
              <div className="font-semibold text-foreground">
                {orderState.selectedCombo.name} ({orderState.selectedCombo.description})
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-sm text-muted-foreground">TỔNG CỘNG</div>
                <div className="text-2xl font-bold text-primary">
                  {formatPrice(orderState.selectedCombo.price)}
                </div>
              </div>
              <Button
                onClick={onNext}
                disabled={!canProceed}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base"
              >
                Tiếp theo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {orderState.selectedCombo && <div className="h-32" />}
    </div>
  )
}
