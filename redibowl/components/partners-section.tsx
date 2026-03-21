const partners = [
  { name: "Partner 1", logo: "/partner-1.png" },
  { name: "Partner 2", logo: "/partner-2.png" },
  { name: "Partner 3", logo: "/partner-3.png" },
  { name: "Partner 4", logo: "/partner-4.png" },
  { name: "Partner 5", logo: "/partner-5.png" },
  { name: "Partner 6", logo: "/partner-6.png" },
]

const clients = [
  { name: "Client 1", logo: "/client-1.png" },
  { name: "Client 2", logo: "/client-2.png" },
  { name: "Client 3", logo: "/client-3.png" },
  { name: "Client 4", logo: "/client-4.png" },
  { name: "Client 5", logo: "/client-5.png" },
  { name: "Client 6", logo: "/client-6.png" },
]

export function PartnersSection() {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center max-w-3xl">
        <span className="text-primary font-bold uppercase tracking-[0.3cm] block mb-4 text-xs">Đối tác & Khách hàng</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Đồng hành cùng RediBowl
        </h2>
        <p className="text-white/80 text-lg text-balance">
          Chúng tôi tự hào là lựa chọn hàng đầu của sinh viên và các đối tác tại VGU.
        </p>
      </div>

      <div className="space-y-4">
        {/* Row 1: Partners - Rolling Left to Right */}
        <div className="relative flex overflow-hidden group border-y border-white/10">
          <div className="flex animate-scroll-right whitespace-nowrap py-0">
            {[...partners, ...partners, ...partners, ...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex items-center justify-center shrink-0 w-64 h-32 md:h-40 border-r border-white/10 hover:bg-white/5 transition-colors"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Clients - Rolling Left to Right */}
        <div className="relative flex overflow-hidden group border-b border-white/10">
          <div className="flex animate-scroll-right whitespace-nowrap py-0">
            {[...clients, ...clients, ...clients, ...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex items-center justify-center shrink-0 w-64 h-32 md:h-40 border-r border-white/10 hover:bg-white/5 transition-colors"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 text-center">
        <p className="text-sm text-white/60">
          Liên hệ hợp tác: <a href="mailto:info@redibowl.vn" className="text-white font-bold hover:underline">info@redibowl.vn</a>
        </p>
      </div>
    </section>
  )
}
