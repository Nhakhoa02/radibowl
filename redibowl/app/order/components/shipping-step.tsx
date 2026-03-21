"use client"

import Image from "next/image"
import { ArrowLeft, ArrowRight, ChevronDown, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { OrderState } from "@/app/order/page"

interface ShippingStepProps {
  orderState: OrderState
  updateOrderState: (updates: Partial<OrderState>) => void
  onNext: () => void
  onPrevious: () => void
}

const buildings = [
  "Tòa A - KTX Cam",
  "Tòa B - KTX Xanh",
  "Khác",
]

const deliveryTimes = [
  "11:00 - 12:00",
  "12:00 - 13:00",
  "17:00 - 18:00",
  "18:00 - 19:00",
  "19:00 - 20:00",
]

export function ShippingStep({
  orderState,
  updateOrderState,
  onNext,
  onPrevious,
}: ShippingStepProps) {
  const updateShippingInfo = (field: keyof typeof orderState.shippingInfo, value: string) => {
    updateOrderState({
      shippingInfo: {
        ...orderState.shippingInfo,
        [field]: value,
      },
    })
  }

  const isValid =
    orderState.shippingInfo.fullName &&
    orderState.shippingInfo.phone &&
    orderState.shippingInfo.building &&
    orderState.shippingInfo.room &&
    orderState.shippingInfo.deliveryTime

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-3 font-serif">
          Thông tin giao hàng
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Để chúng mình giao đúng phòng cho bạn
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
        <div>
          <label className="block text-xs font-semibold text-primary uppercase mb-2">
            HỌ VÀ TÊN *
          </label>
          <input
            type="text"
            value={orderState.shippingInfo.fullName}
            onChange={(e) => updateShippingInfo("fullName", e.target.value)}
            placeholder="Nguyễn Văn A"
            className="w-full px-4 py-3 bg-muted rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-primary uppercase mb-2">
              SỐ ĐIỆN THOẠI *
            </label>
            <input
              type="tel"
              value={orderState.shippingInfo.phone}
              onChange={(e) => updateShippingInfo("phone", e.target.value)}
              placeholder="0901 234 567"
              className="w-full px-4 py-3 bg-muted rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-primary uppercase mb-2">
              TOÀ NHÀ KTX *
            </label>
            <div className="relative">
              <select
                value={orderState.shippingInfo.building}
                onChange={(e) => updateShippingInfo("building", e.target.value)}
                className="w-full px-4 py-3 bg-muted rounded-xl text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Chọn tòa KTX</option>
                {buildings.map((building) => (
                  <option key={building} value={building}>
                    {building}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-primary uppercase mb-2">
              SỐ PHÒNG *
            </label>
            <input
              type="text"
              value={orderState.shippingInfo.room}
              onChange={(e) => updateShippingInfo("room", e.target.value)}
              placeholder="Ví dụ: 302"
              className="w-full px-4 py-3 bg-muted rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-primary uppercase mb-2">
              KHUNG GIỜ NHẬN HÀNG *
            </label>
            <div className="relative">
              <select
                value={orderState.shippingInfo.deliveryTime}
                onChange={(e) => updateShippingInfo("deliveryTime", e.target.value)}
                className="w-full px-4 py-3 bg-muted rounded-xl text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Chọn thời gian</option>
                {deliveryTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden h-40">
        <Image
          src="/hero-1.jpg"
          alt="Quick tip"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute inset-0 p-6 flex flex-col justify-center">
          <div className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
            QUICK TIP!
          </div>
          <p className="text-white font-medium max-w-xs">
            Ghi chú rõ ràng giúp shipper tìm bạn nhanh hơn!
          </p>
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
          disabled={!isValid}
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 disabled:opacity-50"
        >
          Tiếp theo
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  )
}
