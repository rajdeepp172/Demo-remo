import { ImageResizer } from "@/components/image-resizer"
import { Features } from "@/components/features"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <ImageResizer />
      <Features />
    </div>
  )
}
