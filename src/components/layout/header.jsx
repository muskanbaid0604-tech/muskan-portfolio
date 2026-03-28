"use client";

import { navbarItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { navVariants } from "../animation/motion";
import { Button } from "../ui/button";

export default function Header() {
  // const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Add null check for initial value; compare previous/next scroll positions
    // const previous = scrollY.getPrevious();
    // if (previous !== undefined && latest > previous) {
    //   setHidden(true);
    // } else {
    //   setHidden(false);
    // }
    // Also handle blurred background if scrolled beyond threshold
    setIsScrolled(latest > 5);
  });

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        className={cn(
          "padding-x fixed top-4 left-1/2 z-50 hidden w-fit max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-4 rounded-2xl border border-black/10 bg-secondary/85 py-1.5 shadow-md backdrop-blur-md md:flex md:gap-5 lg:gap-6 lg:py-2",
          isScrolled && "shadow-lg backdrop-blur-[10px]"
        )}
        // animate={hidden ? "hidden" : "visible"}
      >
        <div className="shrink-0">
          <Link href={"/"} className="flex items-center">
            <img
              src="/logo-mb.png"
              alt="Muskan Baid"
              className="h-14 w-auto object-contain md:h-16 lg:h-[4.25rem]"
            />
          </Link>
        </div>
        <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-4">
          {navbarItems.map((item) => (
            <Link
              key={item.id}
              className="flex w-fit items-center text-xs capitalize text-black sm:text-sm"
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="shrink-0">
          <Button
            asChild
            size="sm"
            className="h-8 min-h-0 px-3 py-0 text-xs sm:h-9 sm:px-4 sm:text-sm"
          >
            <Link href="#contact">Let&apos;s Talk</Link>
          </Button>
        </div>
      </motion.nav>
      <div className="fixed left-1/2 top-4 z-[90] flex w-[calc(100%-2rem)] max-w-full -translate-x-1/2 justify-center md:hidden">
        <nav className="w-fit max-w-full rounded-2xl border border-black/10 bg-secondary/85 p-2 shadow-md backdrop-blur-md sm:p-2.5">
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Logo Section */}
            <Link
              href="/"
              className="flex shrink-0 items-center"
            >
              <img
                src="/logo-mb.png"
                alt="Muskan Baid"
                className="h-14 w-auto object-contain sm:h-16"
              />
              {/* <h2 className="text-lg">Logo</h2> */}
            </Link>

            {/* Mobile Menu Button and Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMobileMenu}
                className="flex size-8 items-center flex-col gap-1 justify-center rounded-[12px] transition-all transform ease-in-out active:scale-95"
                aria-label="Toggle mobile menu"
              >
                <span
                  className={cn(
                    "transition-all transform w-5 bg-foreground h-0.5  duration-300 ease-in-out origin-bottom-left",
                    isMenuOpen ? "rotate-45" : "rotate-0"
                  )}
                />

                <span
                  className={cn(
                    "transition-all transform w-5 h-0.5 bg-foreground/70 duration-300 ease-in-out origin-bottom-left",
                    isMenuOpen ? "opacity-0" : "rotate-0"
                  )}
                />

                <span
                  className={cn(
                    "transition-all transform w-5 h-0.5 bg-foreground duration-300 ease-in-out origin-bottom-left",
                    isMenuOpen ? "-rotate-45" : "rotate-0"
                  )}
                />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence initial={false}>
            {isMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="overflow-hidden px-4"
              >
                <div className="mt-3 border-t border-black/50 pb-3 pt-3">
                  <div className="flex flex-col items-center gap-1.5 px-2 text-center">
                    {navbarItems.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="w-full rounded-md px-2 py-0.5 text-sm tracking-tight text-black opacity-70 transition-opacity hover:bg-muted hover:opacity-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                  <div className="flex justify-center p-1.5 pt-2">
                    <Button
                      asChild
                      size="sm"
                      className="h-8 min-h-0 px-3 text-xs"
                    >
                      <Link href="#contact">Let&apos;s Talk</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
}
