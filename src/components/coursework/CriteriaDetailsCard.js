import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import LikeDislikeButtons from "../LikeDislikeButton";
import {
  CriteriaHeader,
  ImprovementList,
  StrengthsList,
} from "./EvaluationDetailComponents";
import { Skeleton } from "../ui/skeleton";
import { transitionClass } from "@/lib/globalConstants";

const CriteriaDetailsCard = ({ detail, isCollapsed, loading }) => {
  const [isOpen, setIsOpen] = useState(isCollapsed);

  if (loading) {
    return (
      <Card
        className={`${transitionClass} hover:shadow-2xl w-full space-y-5 rounded-3xl bg-white ${
          isOpen ? "flex-1 p-4" : "flex h-[82px] items-center"
        }`}
      >
        <Collapsible
          open={isOpen}
          onOpenChange={(value) => {
            setIsOpen(value);
          }}
          className="w-full space-y-2 sm:min-w-[336px]"
        >
          <CollapsibleTrigger asChild>
            <div className="flex cursor-pointer items-center gap-3 pr-3">
              <Skeleton className="relative size-[76px] shrink-0 p-2 rounded-3xl" />
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2">
            <div className="h-px w-full bg-[#D6DFE4]"></div>
            <ul className="flex flex-col gap-2 rounded-2xl border p-4 bg-[#3CC28A05]">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-80%" />
              <Skeleton className="h-4 w-90%" />
              <Skeleton className="h-4 w-60%" />
            </ul>
            <div className="h-px w-full bg-neutrals-200" />
            <CardContent className="flex items-center justify-between gap-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    );
  }

  return (
    <Card
      className={`${transitionClass} hover:shadow-2xl w-full space-y-5 rounded-3xl bg-white ${
        isOpen ? "flex-1 p-4" : "flex h-[82px] items-center"
      }`}
    >
      <Collapsible
        open={isOpen}
        onOpenChange={(value) => {
          setIsOpen(value);
        }}
        className="w-full space-y-2 sm:min-w-[336px]"
      >
        <CollapsibleTrigger asChild>
          <div>
            <CriteriaHeader isCollapsed={isOpen} detail={detail} />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="h-px w-full bg-[#D6DFE4]"></div>
          <div className="flex items-start justify-between gap-3 overflow-hidden">
            <p className="text-wrap text-sm font-semibold leading-normal text-neutrals-700">
              {detail?.headline}
            </p>
          </div>
          {detail?.strengths?.length && (
            <StrengthsList strengths={detail.strengths} />
          )}
          {detail?.improvement?.length && (
            <ImprovementList improvement={detail.improvement} />
          )}
          <div className="h-px w-full bg-neutrals-200" />
          <CardContent className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold text-neutrals-700">
              Your feedback will help us to improve our AI Model
            </p>
            <LikeDislikeButtons />
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default CriteriaDetailsCard;
