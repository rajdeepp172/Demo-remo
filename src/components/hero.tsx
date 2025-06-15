"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Zap, Shield, Download } from "lucide-react"

export function Hero() {
  const scrollToResizer = () => {
    const element = document.getElementById("image-resizer")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Resize Images{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Instantly
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Professional image resizing tool with advanced features. Resize by dimensions, optimize file size, and
            maintain perfect quality. No registration required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={scrollToResizer}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Start Resizing
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Lightning Fast</h3>
              <p className="text-sm text-slate-600">Process images instantly</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900">100% Secure</h3>
              <p className="text-sm text-slate-600">Images processed locally</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                <Download className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Free Forever</h3>
              <p className="text-sm text-slate-600">No limits, no watermarks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
