import { Zap, Shield, Smartphone, Palette, Download, Settings } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process images instantly with our optimized algorithms. No waiting, no delays.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "All processing happens in your browser. Your images never leave your device.",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Works perfectly on all devices - desktop, tablet, and mobile.",
    },
    {
      icon: Palette,
      title: "Multiple Formats",
      description: "Support for JPEG, PNG, and WebP formats with quality control.",
    },
    {
      icon: Download,
      title: "Instant Download",
      description: "Download your resized images immediately with a single click.",
    },
    {
      icon: Settings,
      title: "Advanced Options",
      description: "Fine-tune dimensions, quality, and maintain aspect ratios.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose ResizeIt?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional-grade image resizing with the features you need and the simplicity you want.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
