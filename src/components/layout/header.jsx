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
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Add null check for initial value; compare previous/next scroll positions
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
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
          "w-full h-12 padding-x fixed top-0 left-0 z-50 hidden md:flex items-center justify-between ",
          isScrolled && "backdrop-blur-[8px] shadow"
        )}
        animate={hidden ? "hidden" : "visible"}
      >
        <div className="w-[50%]">
          <Link href={"/"} className=" w-fit">
            <h2 className="text-lg bg-primary text-secondary px-3 py-0.5 w-fit">
              Logo
            </h2>
          </Link>
        </div>
        <div className="flex gap-x-4 items-center w-[50%]">
          {navbarItems.map((item) => (
            <Link
              key={item.id}
              className={`w-fit text-sm text-black capitalize flex`}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
          <Button className="ml-auto" size={"sm"}>
            Let's Talk
          </Button>
        </div>
      </motion.nav>
      <div className="fixed  inset-x-4 top-4 z-[90] md:hidden">
        <nav className="bg-backdrop rounded-xl border w-full  backdrop-blur-md px-2 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link
              href="/"
              className="flex px-2 items-center gap-2 text-sm font-bold"
            >
              {/* <img src={logoSrc} alt={logoAlt} className="h-12 -mt-1 -mb-2" /> */}
              <h2 className="text-lg">Logo</h2>
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
                className="overflow-hidden"
              >
                <div className="mt-4 pb-4 border-t pt-4">
                  <div className="flex flex-col gap-2 px-2">
                    {navbarItems.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-black hover:text-foreground tracking-tight opacity-70 hover:opacity-100 transition-opacity transform py-1 px-2 rounded-md hover:bg-muted"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                  <Link href="/contact" className="p-2  inline-block">
                    <Button size="sm" className="px-4">
                      Let's Talk
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
}
