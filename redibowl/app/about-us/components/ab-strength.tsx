"use client"

import { ShieldCheck, ShieldAlert, TrendingUp, AlertTriangle } from "lucide-react"

export function AbStrength() {
  const swot = [
    {
      type: "Strengths",
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
      items: [
        "Giao tận ký túc xá, không cần xe",
        "Giá cả phù hợp sinh viên",
        "Cân bằng dinh dưỡng, rõ calo",
        "Team 14 người năng động",
        "Chi phí vận hành thấp (không thuê mặt bằng)"
      ],
      color: "bg-green-50/50 border-green-200"
    },
    {
      type: "Weaknesses",
      icon: <ShieldAlert className="w-8 h-8 text-orange-500" />,
      items: [
        "Quy mô nhỏ, năng lực sản xuất hạn chế",
        "Thiếu kinh nghiệm kinh doanh",
        "Chưa có thương hiệu nhận diện",
        "Phụ thuộc vào lịch học để giao hàng"
      ],
      color: "bg-orange-50/50 border-orange-200"
    },
    {
      type: "Opportunities",
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      items: [
        "Nhu cầu ăn uống lành mạnh tăng cao",
        "Sinh viên VGU đông và tập trung",
        "Xu hướng meal prep toàn cầu",
        "Tiềm năng mở rộng sang campus khác"
      ],
      color: "bg-blue-50/50 border-blue-200"
    },
    {
      type: "Threats",
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      items: [
        "Mùa hè, lễ tết: sinh viên về nhà",
        "Cạnh tranh từ canteen và app giao đồ ăn",
        "Nguyên liệu tươi: khó bảo quản",
        "Sở thích thay đổi nhanh"
      ],
      color: "bg-red-50/50 border-red-200"
    }
  ]

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 text-balance">
          <span className="text-primary font-semibold uppercase tracking-widest block mb-4">Phân tích</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">SWOT Analysis</h2>
          <p className="text-muted-foreground text-lg">
            Để mang đến dịch vụ tốt nhất, chúng tôi luôn nhìn sâu vào thực tế, đánh giá điểm mạnh để phát huy và thách thức để vượt qua.
          </p>
        </div>

        {/* SWOT Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {swot.map((card, index) => (
            <div 
              key={index} 
              className={`p-10 rounded-[2.5rem] border ${card.color} shadow-sm group hover:shadow-xl hover:scale-[1.02] transition-all duration-500`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-widest">{card.type}</h3>
              </div>
              <ul className="space-y-4">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/20 shrink-0" />
                    <span className="text-foreground/80 leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
