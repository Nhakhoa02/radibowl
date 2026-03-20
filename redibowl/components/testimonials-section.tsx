"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Nguyễn Thị Mai",
    role: "Giảm 8kg trong 2 tháng",
    avatar: "/avatar-1.jpg",
    content: "Fitfood đã thay đổi hoàn toàn cách tôi ăn uống. Không còn lo lắng về việc nấu nướng, chỉ cần hâm nóng và thưởng thức. Sau 2 tháng, tôi đã giảm được 8kg một cách lành mạnh!",
  },
  {
    name: "Trần Văn Hùng",
    role: "Tăng 5kg cơ nạc",
    avatar: "/avatar-2.jpg",
    content: "Gói MEAT của Fitfood là lựa chọn hoàn hảo cho người tập gym như tôi. Lượng protein đầy đủ, khẩu phần vừa đủ. Đã tăng được 5kg cơ nạc sau 3 tháng sử dụng.",
  },
  {
    name: "Lê Thị Hương",
    role: "Mẹ bỉm sữa bận rộn",
    avatar: "/avatar-3.jpg",
    content: "Với công việc bận rộn và con nhỏ, Fitfood giúp tôi tiết kiệm thời gian mà vẫn đảm bảo sức khỏe. Đồ ăn ngon, đa dạng và giao hàng đúng giờ. Highly recommend!",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider">Đánh giá</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Câu chuyện khách hàng
          </h2>
          <p className="text-muted-foreground text-lg">
            Những câu chuyện thành công từ khách hàng thân yêu của Fitfood
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary rounded-3xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            
            <div className="text-center">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-primary/20">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>

              {/* Author */}
              <h4 className="text-xl font-bold text-foreground">{testimonials[current].name}</h4>
              <p className="text-primary font-medium">{testimonials[current].role}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-primary w-6" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
