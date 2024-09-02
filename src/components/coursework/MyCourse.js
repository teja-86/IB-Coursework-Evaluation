import { useCourseworkStore } from "@/store/useCourseWork";
import CourseCard from "./CourseCard";
import { useState } from "react";

const MyCourse = () => {
  const [isViewAll, setIsViewAll] = useState(false);
  const { courseworkList } = useCourseworkStore();

  const sortedList = courseworkList.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  if (sortedList.length > 0) {
    return (
      <div className="flex w-full flex-col justify-start gap-10 md:w-[600px] lg:w-full xl:w-[906px] px-4 sm:px-0">
        <div className="flex max-w-screen-sm-2 flex-col gap-3 self-stretch lg:max-w-[900px]">
          <div className="flex items-center justify-start gap-2.5 self-stretch">
            <p className="text-[20px] font-bold leading-[normal] text-neutrals-700">
              My coursework
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-4 self-stretch overflow-hidden sm:grid sm:grid-cols-2">
            {sortedList?.map((detail, index) => {
              if (detail && index < 2 && !isViewAll) {
                return <CourseCard key={detail.id + index} details={detail} />;
              }
              if (detail && isViewAll) {
                return <CourseCard key={detail.id + index} details={detail} />;
              }
            })}
          </div>
          {!isViewAll && (
            <p
              className="mx-auto w-fit cursor-pointer text-base font-bold leading-[normal] text-neutrals-500"
              onClick={() => setIsViewAll(true)}
            >
              View All
            </p>
          )}
        </div>
      </div>
    );
  } else return <></>;
};

export default MyCourse;
