"use client"

import { Separator } from "@/components/ui/separator"
import { Target, Eye, Sparkles } from "lucide-react"

export function AbHero() {
  const coreValues = ["Nhanh", "Sạch", "Ngon", "Tiết kiệm"]

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-primary font-semibold uppercase tracking-widest block mb-4">Về chúng tôi</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 text-balance">
            Câu chuyện của RediBowl
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 text-pretty">
            Chúng tôi là nhóm 14 sinh viên VGU — những người đã quá quen với cảm giác vừa đói vừa không có thời gian nấu ăn. 
            RediBowl ra đời để giải quyết chính vấn đề đó: bữa ăn cân bằng dinh dưỡng, sẵn sàng trong vài phút, giao ngay tại ký túc xá.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-bold italic">"Redi to Eat. Redi to Live."</span>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
          <div className="bg-card p-10 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Sứ Mệnh</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cung cấp giải pháp bữa ăn tiện lợi, lành mạnh và hợp túi tiền, giúp sinh viên VGU duy trì năng lượng và hiệu suất học tập mỗi ngày.
            </p>
          </div>
          <div className="bg-card p-10 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Tầm Nhìn</h2>
            <p className="text-muted-foreground leading-relaxed">
              Trở thành thương hiệu meal prep được yêu thích nhất trong các ký túc xá đại học tại Việt Nam, nơi sức khoẻ gặp sự tiện lợi.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center max-w-4xl mx-auto">
          <Separator className="mb-12" />
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">Giá trị cốt lõi</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {coreValues.map((value, index) => (
              <div key={index} className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-xl md:text-2xl font-bold text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
