import { Leaf, Recycle, UtensilsCrossed } from "lucide-react"

const initiatives = [
  {
    icon: Leaf,
    title: "Túi sinh học tự hủy",
    description: "Nhà cung cấp duy nhất sử dụng túi Nylon sinh học tự hủy thân thiện với môi trường",
  },
  {
    icon: Recycle,
    title: "Hoàn tiền hộp nhựa",
    description: "Rửa sạch lại hộp nhựa đen để nhận hoàn tiền 5,000 VND cho mỗi 10 hộp",
  },
  {
    icon: UtensilsCrossed,
    title: "Giảm thiểu rác thải",
    description: "Fitfood chỉ cung cấp 01 bộ muỗng nĩa mỗi ngày để giảm thiểu rác thải nhựa",
  },
]

export function EnvironmentSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary-foreground/80 font-semibold uppercase tracking-wider">
              Bảo vệ môi trường
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8 text-balance">
              Chung tay bảo vệ<br />Môi trường
            </h2>

            <div className="space-y-6">
              {initiatives.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-primary-foreground/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/environment.jpg"
                alt="Fitfood environment initiatives"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card text-foreground p-6 rounded-2xl shadow-lg max-w-xs">
              <p className="font-semibold text-primary">Cam kết xanh</p>
              <p className="text-sm text-muted-foreground mt-1">
                Mỗi hành động nhỏ góp phần tạo nên sự thay đổi lớn
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
