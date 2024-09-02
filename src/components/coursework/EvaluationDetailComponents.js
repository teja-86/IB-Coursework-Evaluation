import SvgArrowIcon from "../../../public/icons/SvgArrowIcon";
import SvgScoreIndicator from "../../../public/icons/SvgScoreIndicator";
import SvgImprovementIcon from "../../../public/icons/SvgImprovementIcon";
import SvgCheckIcon from "../../../public/icons/SvgCheckIcon";

const headingClasses = "text-xl font-extrabold leading-normal text-black";
const listItemClasses = "flex items-start gap-3";
const textClasses = "text-sm font-bold leading-normal text-neutrals-800";

export const CriteriaHeader = ({ isCollapsed, detail }) => {
  const percentage = (detail.score / detail.total) * 100;
  return (
    <div
      className={`flex items-center gap-4 cursor-pointer ${
        isCollapsed ? "" : "px-4 py-3 "
      }`}
    >
      <div
        className={`relative shrink-0 ${
          !isCollapsed ? "size-[76px] p-2" : "size-[40px]"
        }`}
      >
        <div className="flex items-center justify-center">
          <SvgScoreIndicator color={detail.color} percentage={percentage} />
          <span className="absolute left-1/2 top-1/2 flex min-h-[22px] min-w-[22px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[15px] font-[800] text-neutrals-800">
            {detail?.score}/{detail?.total}
          </span>
        </div>
      </div>
      <div>
        <p className="text-xs font-bold leading-normal text-neutrals-500">
          Criteria {detail?.id} :
        </p>
        <p
          className={`${
            isCollapsed
              ? "text-xl font-bold leading-normal text-neutrals-800"
              : ""
          }`}
        >
          {detail?.name}
        </p>
      </div>
      <div className="ml-auto rounded hover:bg-gray-200 transition">
        <SvgArrowIcon direction={isCollapsed ? "up" : "down"} />
      </div>
    </div>
  );
};

export const StrengthsList = ({ strengths }) => (
  <div className="grid gap-2">
    <div className={headingClasses}>Strengths</div>
    <ul className="flex flex-col gap-2 rounded-2xl border p-4 border-[#3CC28AB8] bg-[#3CC28A05]">
      {strengths.map((data, index) => (
        <li key={index} className={listItemClasses}>
          <SvgCheckIcon />
          <p className={textClasses}>{data}</p>
        </li>
      ))}
    </ul>
  </div>
);

export const ImprovementList = ({ improvement }) => (
  <div className="grid gap-2">
    <div className={headingClasses}>Scope of Improvement</div>
    <ul className="flex flex-col gap-2 rounded-2xl border p-4 border-[#F9C94E80] bg-[#F9C94E05]">
      {improvement.map((data, index) => (
        <li key={index} className={listItemClasses}>
          <SvgImprovementIcon />
          <p className={textClasses}>{data}</p>
        </li>
      ))}
    </ul>
  </div>
);
