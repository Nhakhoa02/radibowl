import { Leaf, Heart, Award, Users } from "lucide-react"

const stats = [
  { icon: Users, value: "14", label: "Sinh viên sáng lập" },
  { icon: Award, value: "100+", label: "Món ăn" },
  { icon: Heart, value: "100%", label: "Tận tâm" },
  { icon: Leaf, value: "Clean", label: "Nguyên liệu" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/about-image.jpg"
                alt="RediBowl healthy meals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <p className="text-3xl font-bold text-white">14</p>
              <p className="text-sm">Thành viên VGU</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider">Về chúng tôi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              REDIBOWL VGU
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Chúng tôi là một nhóm gồm 14 sinh viên từ VGU, cùng chung niềm đam mê mang lại những bữa ăn chất lượng cho cộng đồng sinh viên. RediBowl không chỉ là một dịch vụ ăn uống, mà là giải pháp giúp bạn duy trì sức khỏe trong guồng quay học tập bận rộn.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Hiểu rõ những khó khăn của sinh viên khi tìm kiếm bữa ăn vừa ngon, vừa sạch lại hợp túi tiền ngay tại campus, chúng tôi đã tạo ra RediBowl. Với thực đơn đa dạng và dịch vụ giao tận phòng ký túc xá, chúng tôi cam kết mang đến sự tiện lợi tối đa cho bạn.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
