import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type Testimonial = {
  name: string
  quote: string
  company: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Martinez",
    quote: "Within 3 months, we went from invisible to ranking #1. Our phone hasn't stopped ringing!",
    company: "Martinez Plumbing",
  },
  {
    name: "David Chen",
    quote: "The website they built brings in leads. We're booking 40% more appointments...",
    company: "Chen's Auto Repair",
  },
  {
    name: "Jessica Thompson",
    quote: "Best investment we've made. Our Google reviews went from 12 to over 200...",
    company: "Bloom Flower Shop",
  },
  {
    name: "Michael Rodriguez",
    quote: "They turned our outdated website into a lead machine. Doubled our customer base...",
    company: "Rodriguez Landscaping",
  },
  {
    name: "Emily Watson",
    quote: "Finally, a team that understands local business. Our Google Profile looks amazing...",
    company: "Watson Law Firm",
  },
  {
    name: "James Parker",
    quote: "I was skeptical about SEO, but the results speak for themselves. First page now...",
    company: "Parker HVAC Services",
  },
  {
    name: "Amanda Foster",
    quote: "The ROI has been incredible. Spent less on marketing but got 3x more customers...",
    company: "Foster's Bakery",
  },
  {
    name: "Robert Kim",
    quote: "From website to Google optimization, they handled everything. We compete now...",
    company: "Kim's Family Restaurant",
  },
  {
    name: "Lisa Anderson",
    quote: "Our old website was embarrassing. The new one is professional and converts...",
    company: "Anderson Real Estate",
  },
  {
    name: "Carlos Hernandez",
    quote: "They don't just build websites—they build businesses. Revenue transformed...",
    company: "Hernandez Construction",
  },
]

function Row({ direction = "left" }: { direction?: "left" | "right" }) {
  const animation = direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
  return (
    <div className="relative grid h-40 w-full overflow-hidden">
      <div className={`flex w-[200%] gap-4 ${animation}`}>
        {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
          <Card key={`${t.name}-${idx}`} className="min-w-64 shrink-0">
            <CardContent className="py-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{t.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.company}</div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed">“{t.quote}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function TestimonialsMarquee() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <Row direction="left" />
          <Row direction="right" />
        </div>
      </div>
    </section>
  )
}


