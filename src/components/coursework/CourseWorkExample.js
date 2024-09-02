import { EvaluationData } from "@/lib/globalConstants";
import CourseCard from "./CourseCard";
import { useState } from "react";

const filters = [
  "All",
  "IA Example",
  "EE Example",
  "IO Example",
  "Tok Example",
];

const CourseWorkExample = () => {
  const [filter, setFilter] = useState(filters[0]);
  const [exampleList, setExampleList] = useState(Object.values(EvaluationData));

  const handleFilter = (value) => {
    setFilter(value);

    if (value === "All") {
      setExampleList(Object.values(EvaluationData));
    } else {
      const filteredList = Object.values(EvaluationData).filter(
        (list) => list.example === value
      );
      setExampleList(filteredList);
    }
  };

  if (exampleList?.length > 0) {
    return (
      <div className="flex w-full flex-col justify-start gap-10 md:w-[600px] lg:w-full xl:w-[906px] px-4 sm:px-0">
        <div className="flex max-w-full-sm-2 flex-col gap-3 self-stretch lg:max-w-[900px]">
          <div className="flex items-center justify-start gap-2.5 self-stretch">
            <p className="text-[20px] font-bold leading-[normal] text-neutrals-700">
              Explore Coursework
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2 self-stretch">
            {filters.map((name) => {
              const active = name === filter;
              return (
                <div
                  key={name}
                  className={`${
                    active && "bg-white"
                  } flex rounded-lg px-[12px] py-[6px] cursor-pointer hover:bg-white`}
                  onClick={() => handleFilter(name)}
                >
                  <p
                    className={`text-[16px] leading-[normal] ${
                      active
                        ? "text-brand-primary font-extrabold"
                        : "text-neutrals-500 font-bold hover:text-brand-primary"
                    } `}
                  >
                    {name}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-start gap-4 self-stretch overflow-hidden sm:grid sm:grid-cols-2">
            {exampleList?.map((detail, index) => {
              return (
                <CourseCard
                  key={detail.id + index}
                  details={detail}
                  isExample
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  } else return <></>;
};

export default CourseWorkExample;
