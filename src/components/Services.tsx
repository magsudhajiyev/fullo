import { Globe, Search, TrendingUp, Check } from "lucide-react"

const services = [
  {
    title: "Website Creation",
    subtitle: "Your digital storefront, built to perform",
    description: "We craft custom, mobile-responsive websites designed specifically for local businesses. Every site we build focuses on what matters most: converting visitors into paying customers.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-first responsive layout",
      "Fast loading speeds for better SEO",
      "Easy-to-use content management",
      "Secure hosting and SSL certificates",
    ],
    icon: Globe,
  },
  {
    title: "Google Account Management",
    subtitle: "Dominate local search results",
    description: "Your Google Business Profile is often the first thing customers see. We handle the complete setup, optimization, and ongoing management to ensure you're always showing up when customers search.",
    features: [
      "Complete profile setup and verification",
      "Strategic keyword optimization",
      "Professional photos and descriptions",
      "Review monitoring and response",
      "Regular posts and updates",
    ],
    icon: Search,
  },
  {
    title: "SEO Solutions",
    subtitle: "Get found by customers actively searching",
    description: "Search engine optimization isn't just about rankings—it's about driving qualified traffic that converts. Our proven SEO strategies help local businesses appear at the top when customers are ready to buy.",
    features: [
      "Local SEO targeting your service area",
      "On-page optimization and content strategy",
      "Technical SEO and site speed improvements",
      "Monthly analytics and performance reports",
      "Ongoing keyword research and updates",
    ],
    icon: TrendingUp,
  },
]

export function Services() {
  return (
    <section id="services" className="w-full py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Services</h2>
          <p className="mt-5 text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to grow your business online
          </p>
        </div>
        <div className="space-y-32">
          {services.map((s, index) => {
            const Icon = s.icon
            const isReversed = index % 2 === 1
            return (
              <div
                key={s.title}
                className={`flex flex-col gap-12 ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center`}
              >
                <div className="flex-1 w-full">
                  <div className={`mb-8 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-lg ${isReversed ? "lg:ml-auto lg:mr-0" : ""}`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight">{s.title}</h3>
                  <p className="text-lg sm:text-xl text-primary/80 font-medium mb-6">{s.subtitle}</p>
                </div>
                <div className="flex-1 w-full">
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                    {s.description}
                  </p>
                  <ul className="space-y-4">
                    {s.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-base sm:text-lg text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


