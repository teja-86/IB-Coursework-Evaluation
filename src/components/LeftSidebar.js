import SvgZuIcon from "../../public/icons/SvgZuIcon";
import { SvgFireIcon } from "../../public/icons/SvgFireIcon";
import { SvgEventIcon } from "../../public/icons/SvgEventIcon";
import { SvgNoteStack } from "../../public/icons/SvgNoteStack";
import { transitionClass } from "@/lib/globalConstants";

const LeftSidebar = () => {
  const iconClass =
    "flex items-center cursor-pointer bg-white p-1 rounded-full border-[4px] border-neutrals-200 hover:bg-neutrals-100 hover:scale-105 " +
    transitionClass;

  return (
    <div className="sticky top-0 hidden h-lvh  p-2 font-mont sm:block">
      <div className="z-[100] flex h-full flex-col text-clip rounded-2xl p-2 md:w-[58px] lg:w-[58px]">
        <div className="mt-4 flex flex-1 flex-col items-end justify-between">
          <ul className="mx-auto flex w-full flex-1 flex-col gap-3">
            <li className="flex flex-col gap-1">
              <div className="flex items-center bg-white p-1 rounded-2xl">
                <SvgZuIcon />
                <p className="text-neutrals-700 text-[10px] leading-[normal] font-extrabold">
                  100
                </p>
              </div>
              <div className="flex items-center gap-1 bg-white p-1 rounded-2xl">
                <SvgFireIcon />
                <p className="text-neutrals-700 text-[10px] leading-[normal] font-extrabold">
                  17
                </p>
              </div>
            </li>
            <li>
              <div className={iconClass}>
                <SvgEventIcon />
              </div>
            </li>
            <li>
              <div className={iconClass}>
                <SvgNoteStack />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
