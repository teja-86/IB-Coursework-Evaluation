"use client";

import { useEffect, useState } from "react";
import { SvgMobileIcon } from "../../public/icons/SvgMobileLogo";
import { SvgThreeLineIcon } from "../../public/icons/SvgThreeLineIcon";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import SvgCrossIcon from "../../public/icons/SvgCrossIcon";
import { cn } from "@/lib/utils";
import { links } from "@/lib/globalConstants";
import NavItem from "./NavItem";

const Header = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsHeaderOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Popover
      open={isHeaderOpen}
      onOpenChange={(value) => setIsHeaderOpen(value)}
      modal
    >
      <header className="sticky top-0 z-[100] flex h-[60px] w-full items-center justify-between bg-white pl-0 sm:hidden md:pl-[42px]">
        <div className="grid h-11 w-28 place-items-center">
          <SvgMobileIcon />
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="md:hidden">
            <PopoverTrigger asChild>
              <button
                type="button"
                id="radix-:r8:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
                className="outline-none"
              >
                <div className="flex size-[32px] items-center justify-center">
                  {isHeaderOpen ? <SvgCrossIcon /> : <SvgThreeLineIcon />}
                </div>
              </button>
            </PopoverTrigger>
          </div>
        </div>
        <PopoverContent
          className={cn(
            "max-w-full border p-1 text-neutral-800 shadow-md",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2",
            "z-[102] mt-[-7px] bg-white rounded-lg"
          )}
        >
          <div className="flex flex-col gap-2 p-2">
            <ul className="mx-auto w-full flex flex-col gap-1">
              {links.map((link, index) => (
                <li key={link.href + index}>
                  <NavItem
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                    isActive={link.href == "/coursework"}
                  />
                </li>
              ))}
            </ul>
          </div>
        </PopoverContent>
      </header>
    </Popover>
  );
};

export default Header;
