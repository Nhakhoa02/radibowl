"use client"

import { Plus } from "lucide-react"

export function AbTeams() {
  const team = [
    { name: "An", role: "Trưởng nhóm · Thuyết trình", avatar: "/avatar-1.jpg" },
    { name: "Khánh Giao", role: "Nội dung · Kiểm tra", avatar: "/avatar-2.jpg" },
    { name: "Khánh", role: "Thuyết trình · Khảo sát", avatar: "/avatar-3.jpg" },
    { name: "Loan", role: "Thuyết trình · Phân tích", avatar: "/placeholder-user.jpg" },
    { name: "Đậu", role: "Thuyết trình · Vận hành", avatar: "/placeholder-user.jpg" },
    { name: "Minh", role: "Thuyết trình", avatar: "/placeholder-user.jpg" },
    { name: "Hùng", role: "Khảo sát · Nội dung", avatar: "/placeholder-user.jpg" },
    { name: "Thảo", role: "Phỏng vấn · Nội dung", avatar: "/placeholder-user.jpg" },
    { name: "Des", role: "Logo · Canva · Thiết kế", avatar: "/placeholder-user.jpg" },
    { name: "Ngân", role: "Tài chính · Báo cáo", avatar: "/placeholder-user.jpg" },
    { name: "Phúc", role: "Nghiên cứu thị trường", avatar: "/placeholder-user.jpg" },
    { name: "Quân", role: "Marketing · 4Ps", avatar: "/placeholder-user.jpg" },
    { name: "Vy", role: "Vận hành · Giao hàng", avatar: "/placeholder-user.jpg" },
    { name: "Bảo", role: "Nấu ăn · Nguyên liệu", avatar: "/placeholder-user.jpg" },
  ]

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background Blobs for that premium look */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-primary font-bold uppercase tracking-[0.2em] block mb-4 text-sm">Leadership Team</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Đội Ngũ 14 Thành Viên
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative aspect-[3/4.5] overflow-hidden rounded-[1.5rem] bg-secondary/50 border border-border/50">
                {/* Image */}
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-white/70 text-sm font-medium leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Plus Button Icon */}
                <div className="absolute bottom-6 right-6 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                  <Plus className="w-4 h-4 text-black stroke-[3px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
