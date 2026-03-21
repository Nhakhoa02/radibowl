"use client"

import { Check, Utensils, Truck, ClipboardCheck } from "lucide-react"

interface OrderSidebarProps {
  currentStep: number
}

const steps = [
  { id: 1, name: "Chọn Combo", icon: Utensils },
  { id: 2, name: "Thêm Món", icon: Utensils },
  { id: 3, name: "Giao Hàng", icon: Truck },
  { id: 4, name: "Xác Nhận", icon: ClipboardCheck },
]

export function OrderSidebar({ currentStep }: OrderSidebarProps) {
  return (
    <div className="lg:w-56 shrink-0">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="text-primary font-semibold text-sm mb-1">TIẾN TRÌNH ĐẶT HÀNG</div>
        <div className="text-muted-foreground text-sm mb-6">Bước {currentStep} / 4</div>
        
        <div className="space-y-2">
          {steps.map((step) => {
            const isCompleted = step.id < currentStep
            const isCurrent = step.id === currentStep
            const Icon = step.icon
            
            return (
              <div
                key={step.id}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isCurrent
                    ? "bg-[#FFF5EE] text-primary"
                    : isCompleted
                    ? "text-muted-foreground"
                    : "text-muted-foreground/60"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    isCompleted
                      ? "bg-primary text-primary-foreground"
                      : isCurrent
                      ? "text-primary"
                      : ""
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </div>
                <span className={`text-sm ${isCurrent ? "font-medium" : ""}`}>
                  {step.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
