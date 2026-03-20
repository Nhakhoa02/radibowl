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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Partners */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider">Đối tác</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Đối tác của chúng tôi
            </h2>
            <p className="text-muted-foreground mt-4">
              Chúng tôi hợp tác với các nhà cung cấp hàng đầu để đảm bảo chất lượng trải nghiệm tốt nhất
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partners.map((partner) => (
              <div 
                key={partner.name} 
                className="bg-card rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider">Khách hàng</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Khách hàng doanh nghiệp
            </h2>
            <p className="text-muted-foreground mt-4">
              Fitfood tự hào là lựa chọn ưu tiên hàng đầu của các doanh nghiệp lớn trong và ngoài nước
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {clients.map((client) => (
              <div 
                key={client.name} 
                className="bg-card rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow cursor-pointer"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Liên hệ <a href="mailto:business@fitfood.vn" className="text-primary font-semibold hover:underline">business@fitfood.vn</a> để đặt tiệc ngay
          </p>
        </div>
      </div>
    </section>
  )
}
