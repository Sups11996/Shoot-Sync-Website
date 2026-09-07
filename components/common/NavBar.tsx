"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "../ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;

    let handler: ((e: MouseEvent) => void) | null = null;

    const timerId = setTimeout(() => {
      handler = (e: MouseEvent) => {
        if (!(e.target as HTMLElement).closest("[data-mobile-menu]")) {
          setMobileOpen(false);
        }
      };
      document.addEventListener("click", handler);
    }, 100);

    return () => {
      clearTimeout(timerId);
      if (handler) document.removeEventListener("click", handler);
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Main nav bar */}
      <div className="flex items-center justify-between px-5 sm:px-10 lg:px-16 py-5">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="flex gap-1 text-lg transition-transform duration-150 ease-in-out active:scale-95"
          >
            <span className="font-extrabold text-[#017958]">Shoot</span>
            <span className="font-medium text-[#334155]">Sync</span>
          </Link>
        </div>

        {/* Desktop nav — hidden before lg */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-11">
          <nav className="flex gap-6 xl:gap-8">
            {navLinks.map(({ name, path }) => {
              const isActive = pathname === path || (path !== "/" && pathname.startsWith(path));
              return (
                <Link
                  key={path}
                  href={path}
                  className={`group relative inline-block text-sm xl:text-base ${
                    isActive ? "text-[#016146]" : "text-[#475569]"
                  }`}
                >
                  <span>{name}</span>
                  {/* Animated active/hover overlay */}
                  <span
                    className={`absolute inset-0 overflow-hidden whitespace-nowrap text-[#016146] transition-[width] duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  >
                    {name}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button className="cursor-pointer rounded-[8px] border border-[#017958] bg-transparent px-6 py-5 text-base xl:text-lg font-medium text-[#017958] transition-transform duration-150 ease-out hover:scale-103 hover:bg-transparent active:scale-100">
              Log In
            </Button>
            <Button className="cursor-pointer rounded-[8px] bg-[#017958] px-6 py-5 text-base xl:text-lg font-medium text-white transition-transform duration-150 ease-out hover:scale-103 hover:bg-[#017958] active:scale-100">
              Get Started
            </Button>
          </div>
        </div>

        {/* Hamburger — visible under lg */}
        <button
          data-mobile-menu
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-[#334155] active:bg-gray-300 transition-colors"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        data-mobile-menu
        className={`lg:hidden absolute top-full right-6 z-50 w-60 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden transition-all duration-200 ease-out origin-top-right ${
          mobileOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1 p-3">
          {navLinks.map(({ name, path }) => {
            const isActive = pathname === path || (path !== "/" && pathname.startsWith(path));
            return (
              <Link
                key={path}
                href={path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-gray-100 ${
                  isActive ? "text-[#016146] bg-gray-100" : "text-[#475569]"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 flex flex-col gap-2">
          <Button
            onClick={() => setMobileOpen(false)}
            className="w-full cursor-pointer rounded-[8px] border border-[#017958] bg-transparent px-6 py-5 text-base font-medium text-[#017958] transition-transform duration-150 ease-out hover:scale-103 hover:bg-transparent active:scale-100"
          >
            Log In
          </Button>
          <Button
            onClick={() => setMobileOpen(false)}
            className="w-full cursor-pointer rounded-[8px] bg-[#017958] px-6 py-5 text-base font-medium text-white transition-transform duration-150 ease-out hover:scale-103 hover:bg-[#017958] active:scale-100"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}