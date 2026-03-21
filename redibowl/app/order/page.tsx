"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrderSidebar } from "@/app/order/components/order-sidebar"
import { SelectComboStep } from "@/app/order/components/select-combo-step"
import { AddDishesStep } from "@/app/order/components/add-dishes-step"
import { ShippingStep } from "@/app/order/components/shipping-step"
import { ConfirmationStep } from "@/app/order/components/confirmation-step"

export interface Combo {
  id: string
  name: string
  description: string
  price: number
  image: string
  popular?: boolean
}

export interface Dish {
  id: string
  name: string
  description: string
  price: number
  image: string
  badge?: string
}

export interface ShippingInfo {
  fullName: string
  phone: string
  building: string
  room: string
  deliveryTime: string
}

export interface OrderState {
  selectedCombo: Combo | null
  selectedDishes: { dish: Dish; quantity: number }[]
  notes: string
  shippingInfo: ShippingInfo
  paymentMethod: "ewallet" | "bank" | "cash"
}

export default function OrderPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [orderState, setOrderState] = useState<OrderState>({
    selectedCombo: null,
    selectedDishes: [],
    notes: "",
    shippingInfo: {
      fullName: "",
      phone: "",
      building: "",
      room: "",
      deliveryTime: "",
    },
    paymentMethod: "ewallet",
  })

  const goToNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateOrderState = (updates: Partial<OrderState>) => {
    setOrderState((prev) => ({ ...prev, ...updates }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3]">
      <Header />
      <main className="flex-1 pt-24">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <OrderSidebar currentStep={currentStep} />
            <div className="flex-1">
              {currentStep === 1 && (
                <SelectComboStep
                  orderState={orderState}
                  updateOrderState={updateOrderState}
                  onNext={goToNextStep}
                />
              )}
              {currentStep === 2 && (
                <AddDishesStep
                  orderState={orderState}
                  updateOrderState={updateOrderState}
                  onNext={goToNextStep}
                  onPrevious={goToPreviousStep}
                />
              )}
              {currentStep === 3 && (
                <ShippingStep
                  orderState={orderState}
                  updateOrderState={updateOrderState}
                  onNext={goToNextStep}
                  onPrevious={goToPreviousStep}
                />
              )}
              {currentStep === 4 && (
                <ConfirmationStep
                  orderState={orderState}
                  updateOrderState={updateOrderState}
                  onPrevious={goToPreviousStep}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
