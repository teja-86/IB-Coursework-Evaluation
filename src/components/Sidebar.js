import { links } from "@/lib/globalConstants";
import NavItem from "./NavItem";
import SvgLogo from "../../public/icons/SvgLogo";

const Sidebar = () => {
  return (
    <div className="sticky top-0 hidden h-lvh  p-2 font-mont sm:block">
      <div className="z-[100] flex h-full flex-col text-clip rounded-2xl bg-[#F8FAFC] p-2 md:w-[52px]">
        <div className="flex items-center justify-center  bg-[rgba(105,71,191,0.04)]">
          <SvgLogo />
        </div>
        <div className="mt-4 flex flex-1 flex-col items-end justify-between">
          <ul className="mx-auto flex w-full flex-1 flex-col gap-2">
            {links.map((link, index) => (
              <li key={link.href + index}>
                <NavItem
                  href={link.href}
                  icon={link.icon}
                  label={""}
                  isActive={link.href == "/coursework"}
                />
              </li>
            ))}
          </ul>
          <button
            type="button"
            id="radix-:r6:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            className="flex  w-full items-center gap-2.5  outline-none"
          >
            <span className="relative flex shrink-0 overflow-hidden rounded-full size-8">
              <img
                className="aspect-square size-full"
                src="https://zupay.blob.core.windows.net/zpfiles//profile/pp/pp_teen_female_7.png"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
