"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const photos = [
  
   {
    url: "/Adios/images/kelly6.jpeg",
    alt: "kelly 6",
  },
    {
    url: "/Adios/images/kelly10.jpeg",
    alt: "kelly 10",
  },
  
  



]

export function PhotoBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={photo.url || "/placeholder.svg"}
            alt={photo.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-secondary/20" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-balance text-center text-5xl font-bold text-white drop-shadow-2xl md:text-7xl">
          Mi kelly hermosa
        </h1>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex ? "w-12 bg-accent shadow-lg shadow-accent/50" : "w-3 bg-white/60 hover:bg-white/90"
            }`}
            aria-label={`Ir a foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
