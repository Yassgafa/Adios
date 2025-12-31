import { PhotoBanner } from "@/components/photo-banner"
import { AudioTextPlayer } from "@/components/audio-text-player"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <PhotoBanner />
      <AudioTextPlayer />
    </main>
  )
}
