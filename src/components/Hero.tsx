"use client"

import { useEffect, useMemo, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement | null>(null)

  const headline = useMemo(() => "FULL DIGITAL SERVICES", [])

  useEffect(() => {
    if (!headlineRef.current) return
    const chars = headlineRef.current.querySelectorAll<HTMLSpanElement>("[data-char]")
    gsap.set(chars, { yPercent: 120 })
    gsap.to(chars, {
      yPercent: 0,
      ease: "power3.out",
      duration: 0.8,
      stagger: 0.04,
      delay: 0.1,
    })
  }, [])

  useEffect(() => {
    const w = window as unknown as { UnicornStudio?: { isInitialized?: boolean; init: () => void } }

    function initUnicorn() {
      if (w.UnicornStudio && !w.UnicornStudio.isInitialized) {
        try {
          w.UnicornStudio.init()
          w.UnicornStudio.isInitialized = true
        } catch {}
      }
    }

    if (!w.UnicornStudio) {
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.32/dist/unicornStudio.umd.js"
      script.async = true
      script.onload = initUnicorn
      ;(document.head || document.body).appendChild(script)
    } else {
      initUnicorn()
    }
  }, [])

  return (
    <section className="relative min-h-[100svh] w-full">
      {/* Background placeholder for unicorn.studio interactive element */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden id="unicorn-bg">
        <div
          id="unicorn-container"
          data-us-project="k0wBB7VdUUZD8GZsAdxq"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Content */}
      <div className="mx-auto flex h-[100svh] w-full max-w-7xl items-center px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1
            ref={headlineRef}
            className="text-balance text-6xl font-semibold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
            aria-label={headline}
          >
            {headline.split(" ").map((word, wIdx, arr) => (
              <span key={`w-${wIdx}`} className="inline-block whitespace-nowrap">
                {word.split("").map((ch, idx) => (
                  <span key={`c-${wIdx}-${idx}`} className="inline-block overflow-hidden align-baseline">
                    <span data-char className="inline-block will-change-transform">{ch}</span>
                  </span>
                ))}
                {wIdx < arr.length - 1 ? <span aria-hidden>{"\u00A0"}</span> : null}
              </span>
            ))}
          </h1>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="#try">Try it out</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


