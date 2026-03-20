"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Giải pháp HEALTHY FOOD giao tận nơi",
    subtitle: "Kế hoạch bữa ăn hàng tuần cho một lối sống lành mạnh",
    image: "/hero-1.jpg",
  },
  {
    id: 2,
    title: "Trải nghiệm bữa ăn sạch tươi ngon giàu dinh dưỡng",
    subtitle: "Chế biến từ nguyên liệu tươi sạch mỗi ngày",
    image: "/hero-2.jpg",
  },
  {
    id: 3,
    title: "Nhà cung cấp bữa ăn sạch lớn nhất Sài Gòn",
    subtitle: "Hơn 10.000 khách hàng tin tưởng lựa chọn",
    image: "/hero-3.jpg",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          
          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-card">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-lg"
                >
                  Đặt Ngay
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-card text-card hover:bg-card/20 rounded-full px-8 text-lg"
                >
                  Tư Vấn
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/30 hover:bg-card/50 rounded-full flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-card" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/30 hover:bg-card/50 rounded-full flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-card" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-primary w-8" 
                : "bg-card/50 hover:bg-card/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
