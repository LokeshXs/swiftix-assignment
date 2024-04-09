"use client";


import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import clsx from "clsx";
// import AnimatedHamburgerButton from "./AnimatedHamburger";
// import MobileNav from "./MobileNav";
// import MobileNavContextProvider from "@/context/MobileNavContext";
import Image from "next/image";
import MobileNavContextProvider from "@/context/MobileNavContext";
import AnimatedHamburgerButton from "./AnimatedHamburger";
import MobileNav from "./MobileNav";

export default function NavBar() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav className=" px-6 py-4  max-sm:py-2 border-[1px] shadow-md rounded-b-3xl sticky top-0 z-[99] bg-background ">
      <div className="max-w-[1400px] m-auto  flex justify-between items-center   max-md:w-full max-md:z-[40] max-md:bg-primary-foreground">

     
      <Image
        src="/logo.png"
        alt="Ashwa Creations Logo"
        width={60}
        height={60}
        className="max-sm:w-[40px] "
      />
      <div className="flex items-center gap-12 max-lg:gap-8 ">
        <ul className="flex gap-6 text-lg  font-semibold max-md:hidden">
          <li>
              <Link
                href="/blog"
                className={clsx("text-muted-foreground hover:text-primary", {
                  "text-primary": pathName === "/blog",
                })}
              >
                Home
              </Link>
            </li>
          <li>
              <Link
                href="/contact"
                className={clsx("text-muted-foreground hover:text-primary", {
                  "text-primary": pathName === "/contact",
                })}
              >
                Contact
              </Link>
            </li>
          
        </ul>
        
        <MobileNavContextProvider>
          <AnimatedHamburgerButton />
          <MobileNav />
        </MobileNavContextProvider>
      </div>
      </div>
    </nav>
  );
}
