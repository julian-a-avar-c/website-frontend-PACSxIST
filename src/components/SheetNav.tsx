"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaBars } from "react-icons/fa6"

export function SheetNav() {
  return (
    <div className="aspect-square grid gap-2 md:hidden items-center w-auto h-auto">
      <Sheet>
        <SheetTrigger asChild>
          <FaBars className="aspect-square w-[32px] h-[32px]" />
        </SheetTrigger>

        <SheetContent side="left" className="grid">
          <SheetHeader>
            <SheetTitle>PACS & IST</SheetTitle>
            {/* <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription> */}
            <div className="text-left">
              Home
            </div>
            <div className="text-left">
              Articles
            </div>
            <div className="text-left">
              Catalog
            </div>
            <div className="text-left">
              Solutions
            </div>
          </SheetHeader>

          <SheetFooter className="mb-6 w-full">
            <SheetClose asChild>
              <Button type="submit" asChild>
                <a href="tel:7736800681" className="w-full">Contact Sales</a>
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
