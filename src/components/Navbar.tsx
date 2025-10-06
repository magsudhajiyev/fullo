import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between gap-4">
          {/* Left: Logo */}
          <Link href="/" className="font-semibold tracking-tight">
            PumpIt
          </Link>

          {/* Center: Primary nav (5 links) */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <NavigationMenu className="justify-center">
              <NavigationMenuList>
                {[
                  { href: "#services", label: "Services" },
                  { href: "#pricing", label: "Pricing" },
                  { href: "#work", label: "Work" },
                  { href: "#about", label: "About" },
                  { href: "#contact", label: "Contact" },
                ].map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink href={item.href} className="px-3 py-2 rounded-md">
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right: CTA */}
          <div className="flex items-center gap-2">
            <Button asChild>
              <Link href="#join">Join Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}


