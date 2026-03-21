"use client"

import Image from "next/image"
import { ArrowLeft, CreditCard, Building2, Banknote, Check, Truck, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { OrderState } from "@/app/order/page"

interface ConfirmationStepProps {
  orderState: OrderState
  updateOrderState: (updates: Partial<OrderState>) => void
  onPrevious: () => void
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN").format(price) + "đ"
}

const paymentMethods = [
  {
    id: "ewallet" as const,
    name: "E-wallet (Momo / ZaloPay)",
    description: "Thanh toán nhanh, bảo mật cao",
    icon: CreditCard,
  },
  {
    id: "bank" as const,
    name: "Bank Transfer",
    description: "Chuyển khoản ngân hàng nội địa",
    icon: Building2,
  },
  {
    id: "cash" as const,
    name: "Cash",
    description: "Thanh toán khi nhận hàng (COD)",
    icon: Banknote,
  },
]

export function ConfirmationStep({
  orderState,
  updateOrderState,
  onPrevious,
}: ConfirmationStepProps) {
  const comboPrice = orderState.selectedCombo?.price || 0
  const dishesTotal = orderState.selectedDishes.reduce(
    (sum, item) => sum + item.dish.price * item.quantity,
    0
  )
  const subtotal = comboPrice + dishesTotal
  const shippingFee = 35000
  const discount = 50000
  const total = subtotal + shippingFee - discount

  const handlePlaceOrder = () => {
    alert("Đơn hàng của bạn đã được đặt thành công! Cảm ơn bạn đã tin tưởng Fitfood.")
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-3 font-serif">
          Xác Nhận Đơn Hàng
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Vui lòng kiểm tra lại thông tin đơn hàng của bạn trước khi thanh toán.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          {/* Order Details */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-semibold text-foreground">Chi tiết lựa chọn</h3>
            </div>

            {orderState.selectedCombo && (
              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-semibold text-primary uppercase mb-1">
                      GÓI COMBO
                    </div>
                    <div className="font-semibold text-foreground">
                      {orderState.selectedCombo.name}
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      &quot;{orderState.selectedCombo.description}&quot;
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    {formatPrice(orderState.selectedCombo.price)}
                  </div>
                </div>
              </div>
            )}

            {orderState.selectedDishes.length > 0 && (
              <div className="border-b pb-4 mb-4">
                <div className="text-xs font-semibold text-primary uppercase mb-3">
                  MÓN ĂN ĐÃ CHỌN
                </div>
                <div className="space-y-2">
                  {orderState.selectedDishes.map((item) => (
                    <div key={item.dish.id} className="flex justify-between text-sm">
                      <span className="text-foreground">{item.dish.name}</span>
                      <span className="text-muted-foreground">x{item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {orderState.notes && (
              <div className="bg-muted rounded-xl p-4">
                <div className="text-xs font-semibold text-foreground uppercase mb-2">
                  GHI CHÚ ĐẶC BIỆT
                </div>
                <p className="text-sm text-muted-foreground italic">
                  &quot;{orderState.notes}&quot;
                </p>
              </div>
            )}
          </div>

          {/* Shipping Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Truck className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-semibold text-foreground">Thông tin giao hàng</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                  NGƯỜI NHẬN
                </div>
                <div className="font-medium text-foreground">
                  {orderState.shippingInfo.fullName}
                </div>
                <div className="text-sm text-muted-foreground">
                  {orderState.shippingInfo.phone}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                  ĐỊA CHỈ
                </div>
                <div className="text-sm text-foreground">
                  {orderState.shippingInfo.building}, Phòng {orderState.shippingInfo.room}
                </div>
                <div className="text-sm text-muted-foreground">
                  Giao lúc: {orderState.shippingInfo.deliveryTime}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">
              Chọn phương thức thanh toán
            </h3>
            <div className="space-y-3">
              {paymentMethods.map((method) => {
                const isSelected = orderState.paymentMethod === method.id
                const Icon = method.icon
                
                return (
                  <button
                    key={method.id}
                    onClick={() => updateOrderState({ paymentMethod: method.id })}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-transparent bg-muted hover:bg-muted/80"
                    }`}
                  >
                    <Icon className="w-6 h-6 text-muted-foreground" />
                    <div className="flex-1 text-left">
                      <div className="font-medium text-foreground">{method.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {method.description}
                      </div>
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Tóm tắt đơn hàng</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tạm tính</span>
                <span className="text-foreground">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phí giao hàng</span>
                <span className="text-foreground">{formatPrice(shippingFee)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Giảm giá</span>
                <span className="text-primary">-{formatPrice(discount)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between">
                <span className="font-semibold text-foreground">Tổng cộng</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {formatPrice(total)}
                  </div>
                  <div className="text-xs text-muted-foreground">ĐÃ BAO GỒM VAT</div>
                </div>
              </div>
            </div>
            <Button
              onClick={handlePlaceOrder}
              className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-base"
            >
              Hoàn tất đặt hàng
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Bằng cách nhấn đặt hàng, bạn đồng ý với các Điều khoản & Chính sách của Fitfood.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <Image
              src="/hero-2.jpg"
              alt="Delicious food"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white italic">
                &quot;Trải nghiệm ẩm thực thượng lưu tại nhà.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center pt-4 border-t">
        <button
          onClick={onPrevious}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Previous</span>
        </button>
      </div>
    </div>
  )
}
