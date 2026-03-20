import { ClipboardList, ChefHat, Truck, Utensils } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Chọn Gói Ăn",
    description: "Chọn gói ăn phù hợp với nhu cầu của bạn và điền đầy đủ thông tin giao hàng",
  },
  {
    icon: ChefHat,
    title: "Fitfood nấu",
    description: "Chúng tôi lựa chọn những nguyên liệu tốt nhất và nấu trong bếp công nghiệp hiện đại",
  },
  {
    icon: Truck,
    title: "Giao hàng",
    description: "Đội ngũ giao hàng của Fitfood sẽ giao tận nơi các phần ăn cho bạn mỗi ngày",
  },
  {
    icon: Utensils,
    title: "Thưởng thức",
    description: "Không cần suy nghĩ, shopping hay nấu nướng dầu mỡ, chỉ cần hâm và thưởng thức!",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider">Quy trình</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Cách đặt hàng
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-primary/20" />
              )}
              
              <div className="bg-card rounded-2xl p-8 text-center relative z-10 hover:shadow-lg transition-shadow">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
