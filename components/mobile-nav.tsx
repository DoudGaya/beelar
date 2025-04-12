"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[350px] pr-0">
        <SheetTitle className="text-lg sr-only font-bold">Menu</SheetTitle>
        <div className="flex flex-col space-y-6 pt-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-lg font-medium hover:text-teal-600 transition-colors dark:hover:text-teal-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-lg font-medium hover:text-teal-600 transition-colors dark:hover:text-teal-400"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-lg font-medium hover:text-teal-600 transition-colors dark:hover:text-teal-400"
          >
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
