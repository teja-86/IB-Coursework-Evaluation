"use client";

import PdfViewer from "@/components/PdfViewer";
import CriteriaDetailsCard from "@/components/coursework/CriteriaDetailsCard";
import OverAllScore from "@/components/coursework/OverAllScore";
import { Button } from "@/components/ui/button";
import { EvaluationData, transitionClass } from "@/lib/globalConstants";
import { cn } from "@/lib/utils";
import { useCourseworkStore } from "@/store/useCourseWork";
import { ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CourseEvaluation({ isExample }) {
  const { id } = useParams();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [loading, setLoading] = useState(true);
  const { courseworkList } = useCourseworkStore();
  const courseWork = !isExample
    ? courseworkList.find((course) => course.id === id)
    : EvaluationData["Language And Literature"];

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  useEffect(() => {
    const loadingTime = Math.floor(Math.random() * (3500 - 1500 + 1)) + 1500;
    const timer = setTimeout(() => setLoading(false), loadingTime);
    return () => clearTimeout(timer);
  }, []);

  const renderCollapseToggle = () => (
    <div className={cn("flex flex-col space-y-2.5 lg:hidden")}>
      <div className="flex h-10 w-fit items-center justify-between self-stretch rounded-[24px] bg-white px-3 sm:h-auto sm:w-full sm:p-3">
        <div className="hidden max-w-[184px] rounded-xl bg-[rgba(152,161,187,0.12)] px-3 py-1 sm:flex">
          <p className="w-full items-center truncate font-bricolage text-sm font-semibold leading-[normal] text-neutrals-800">
            {isExample ? "sample" : courseWork?.fileName}
          </p>
        </div>
        <Button
          variant="ghost"
          className="text-brand-primary flex items-center gap-2 text-base font-extrabold hover:bg-transparent hover:text-brand-primary"
          onClick={() => setIsCollapsed(false)}
        >
          Expand & view your file
          <ArrowRight color="#6947bf" />
        </Button>
      </div>
    </div>
  );

  const renderPdfView = () => (
    <PdfViewer
      pdfFile={courseWork?.file}
      pdfName={courseWork?.fileName}
      isCollapsed={isCollapsed}
      handleCollapse={toggleCollapse}
      isExample={isExample}
    />
  );

  return (
    <>
      <OverAllScore evaluationDetails={courseWork} classes={"flex sm:hidden"} />
      {isCollapsed && renderCollapseToggle()}
      <div
        className={`sticky top-[66px] hidden lg:flex ${
          isCollapsed ? false : "flex-1"
        } h-lvh max-w-[972px] lg:min-w-[50%]`}
      >
        {renderPdfView()}
      </div>
      {!isCollapsed && (
        <div className="flex flex-col space-y-2.5 lg:hidden">
          <div className="space-y-2.5">
            <Button
              variant="ghost"
              className="flex h-10 w-fit font-extrabold items-center gap-2 rounded-[24px] bg-white px-4 text-brand-primary sm:hidden hover:bg-white hover:text-brand-primary"
              onClick={() => setIsCollapsed(true)}
            >
              Collapse your file
              <ArrowRight color="#6947bf" />
            </Button>
            {renderPdfView()}
          </div>
        </div>
      )}
      <div className={cn(`space-y-2.5 ${isCollapsed ? "w-full" : false}`)}>
        <OverAllScore evaluationDetails={courseWork} />
        {courseWork?.criterias?.map((criteriaDetail) => (
          <div key={`${isCollapsed + criteriaDetail.id}`}>
            <CriteriaDetailsCard
              loading={loading}
              detail={criteriaDetail}
              isCollapsed={isCollapsed}
            />
          </div>
        ))}
        <div
          className={
            "cursor-pointer hover:shadow-2xl hover:scale-105 rounded-3xl bg-white p-3 pl-6 flex w-fit items-center" +
            transitionClass
          }
        >
          <p className="text-xl font-extrabold leading-[normal] text-brand-primary">
            Check detailed Evaluation
          </p>
          <ArrowRight color="#6947bf" />
        </div>
      </div>
    </>
  );
}
