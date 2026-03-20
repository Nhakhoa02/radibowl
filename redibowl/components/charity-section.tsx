const charityEvents = [
  {
    title: "Mang Tết về Lớp học tình thương Long Bửu",
    image: "/charity-1.jpg",
  },
  {
    title: "Vui Hội Trăng Rằm cùng 150 bé nhỏ tại Mái Ấm Tam Bình",
    image: "/charity-2.jpg",
  },
  {
    title: "Lan toả tình yêu thương đến bà con tại Bệnh Viện Nhiệt Đới",
    image: "/charity-3.jpg",
  },
]

export function CharitySection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider">Cộng đồng</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Hoạt động thiện nguyện
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {charityEvents.map((event) => (
            <div 
              key={event.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-card font-semibold text-lg leading-tight text-balance">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
