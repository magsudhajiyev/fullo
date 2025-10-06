import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Fullo. All rights reserved.</div>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#services" className="hover:text-foreground">Services</Link>
            <Link href="#pricing" className="hover:text-foreground">Pricing</Link>
            <Link href="#about" className="hover:text-foreground">About</Link>
            <Link href="#contact" className="hover:text-foreground">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}


