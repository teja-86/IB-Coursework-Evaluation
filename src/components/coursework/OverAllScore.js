import { useState, useEffect } from "react";
import { formatDate } from "@/lib/utils";
import SvgScoreIndicator from "../../../public/icons/SvgScoreIndicator";
import { Skeleton } from "../ui/skeleton";
import { transitionClass } from "@/lib/globalConstants";

const OverAllScore = ({ evaluationDetails, classes }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const percentage =
    (evaluationDetails?.score / evaluationDetails?.total) * 100;

  if (loading) {
    return (
      <div
        className={`w-full items-center justify-between gap-7 rounded-3xl bg-white p-3 pl-6 ${
          classes ? classes : "hidden sm:flex"
        }`}
      >
        <div className="flex flex-col items-start gap-0.5">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className="relative size-20 shrink-0">
          <div className="flex items-center justify-center"></div>
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Skeleton className="h-[50px] w-[50px] rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${transitionClass} hover:shadow-2xl w-full items-center justify-between gap-7 rounded-3xl bg-white p-3 pl-6 ${
        classes ? classes : "hidden sm:flex"
      }`}
    >
      <div className="flex flex-col items-start gap-0.5">
        <p className="text-sm font-bold leading-[normal] text-[#3d404b]">
          Overall Score
        </p>
        <p className="text-2xl font-extrabold leading-[normal] text-neutrals-800">
          Remark :{" "}
          <span style={{ color: evaluationDetails?.color }}>
            {evaluationDetails.Remark}
          </span>
        </p>
        <p className="text-xs font-semibold leading-[normal] text-[#98a1bb]">
          Evaluated on {formatDate(evaluationDetails.date)}
        </p>
      </div>
      <div className="relative size-20 shrink-0">
        <div className="flex items-center justify-center">
          <SvgScoreIndicator
            percentage={percentage}
            color={evaluationDetails.color}
          />
        </div>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <p className="text-[19px] font-extrabold leading-[normal] text-neutrals-900">
            {evaluationDetails.score}/{evaluationDetails.total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverAllScore;
