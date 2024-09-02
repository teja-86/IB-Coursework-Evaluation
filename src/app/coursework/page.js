"use client";

import CourseWorkExample from "@/components/coursework/CourseWorkExample";
import CourseWorkForm from "@/components/coursework/CourseWorkForm";
import MyCourse from "@/components/coursework/MyCourse";

export default function CourseworkPage() {
  return (
    <div className="relative max-w-full flex-1 rounded-t-3xl md:rounded-tr-none">
      <main className="flex min-h-[calc(100lvh-60px)] flex-1 flex-col items-start justify-center gap-10 bg-gray-background py-[80px] font-mont sm:min-h-lvh sm:px-0 md:py-[100px] lg:px-[20px] md:px-[20px]">
        <CourseWorkForm />
        <MyCourse />
        <CourseWorkExample />
      </main>
    </div>
  );
}
