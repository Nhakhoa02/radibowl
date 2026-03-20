import { Leaf, Heart, Award, Users } from "lucide-react"

const stats = [
  { icon: Users, value: "10,000+", label: "Khách hàng" },
  { icon: Award, value: "100+", label: "Món ăn" },
  { icon: Heart, value: "5+", label: "Năm kinh nghiệm" },
  { icon: Leaf, value: "100%", label: "Nguyên liệu sạch" },
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
                alt="Fitfood healthy meals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm">Năm kinh nghiệm</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider">Về chúng tôi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              FITFOOD VIETNAM
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Fitfood VN cung cấp các phần ăn lành mạnh hàng tuần giúp bạn duy trì một lối sống khỏe. 
              Chúng tôi tập trung vào chế độ ăn cân bằng được thiết kế chuyên biệt để hỗ trợ bạn 
              kiểm soát cân nặng một cách hiệu quả nhất.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nếu bạn đang tìm kiếm những bữa ăn ngon và tốt cho sức khỏe được chuẩn bị sẵn ở Saigon 
              thì Fitfood là một lựa chọn tối ưu. Thực đơn đa dạng với hơn 100 món của chúng tôi có 
              thể giúp bạn thưởng thức mà không ngán trong hơn 1 tháng.
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
