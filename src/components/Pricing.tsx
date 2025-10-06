import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for getting started online",
    features: ["Single-page site", "Basic SEO", "Email support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$299",
    period: "/month",
    description: "Ideal for growing businesses",
    features: ["Multi-page site", "Local SEO", "Lead forms", "Priority support"],
    popular: true,
  },
  {
    name: "Pro",
    price: "$599",
    period: "/month",
    description: "For businesses that need it all",
    features: ["Custom site", "Advanced SEO", "CRM automations", "Dedicated manager"],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent pricing that grows with you
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-center">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={`relative h-full flex flex-col transition-all duration-300 hover:shadow-2xl ${
                p.popular
                  ? "border-primary border-2 shadow-xl scale-105 md:scale-110"
                  : "border-2 hover:scale-105"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}
              <CardContent className="pt-8 pb-6 px-6 flex-1">
                <div className="text-center mb-6">
                  <CardTitle className="text-2xl mb-2">{p.name}</CardTitle>
                  <CardDescription className="text-sm mb-4">{p.description}</CardDescription>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold tracking-tight">{p.price}</span>
                    <span className="text-muted-foreground text-lg">{p.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mt-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button
                  className={`w-full h-11 text-base font-semibold ${
                    p.popular
                      ? "bg-primary hover:bg-primary/90 shadow-md"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  variant={p.popular ? "default" : "secondary"}
                >
                  Choose {p.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


