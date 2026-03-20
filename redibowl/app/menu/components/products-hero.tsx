"use client"

import { Zap, Leaf, Activity, Truck } from "lucide-react"

export function ProductsHero() {
    const pillars = [
        {
            icon: <Zap className="w-6 h-6 text-primary" />,
            title: "Nhanh",
            desc: "Sẵn sàng trong <5 phút — không cần nấu"
        },
        {
            icon: <Leaf className="w-6 h-6 text-primary" />,
            title: "Sạch",
            desc: "Nguyên liệu tươi, ít dầu mỡ, nhiều rau xanh"
        },
        {
            icon: <Activity className="w-6 h-6 text-primary" />,
            title: "Rõ calo",
            desc: "In calo ngay trên nắp hộp, tiện theo dõi"
        },
        {
            icon: <Truck className="w-6 h-6 text-primary" />,
            title: "Tận nơi",
            desc: "Giao đến phòng ký túc xá mỗi ngày"
        }
    ]

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center opacity-100"
                style={{ backgroundImage: `url('/hero-1.jpg')` }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-transparent" />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Bữa ăn ngon — sạch — đủ dinh dưỡng
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Mỗi tuần 5 bữa, bạn tự chọn đạm chính theo khẩu vị.
                        Tất cả đều được tính calo sẵn để bạn yên tâm theo dõi chế độ ăn.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">{pillar.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
