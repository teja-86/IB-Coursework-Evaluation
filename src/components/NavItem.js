import classNames from "classnames";
import Link from "next/link";

const NavItem = ({ href, icon, isActive, label }) => {
  return (
    <Link
      href={href}
      className={classNames(
        "flex h-9 items-center justify-center gap-2 rounded-[20px] p-1.5 text-[15px] font-semibold transition",
        {
          "text-white bg-brand-primary hover:bg-brand-primary": isActive,
          "text-[#3d404b] hover:bg-[#d6dfe4]": !isActive,
        }
      )}
    >
      {icon}
      {label}
    </Link>
  );
};

export default NavItem;
