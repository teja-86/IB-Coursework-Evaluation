import React, { useMemo } from "react";
import { transitionClass } from "@/lib/globalConstants";
import { getRandomGradient } from "@/lib/utils";
import { useRouter } from "next/navigation";

const CourseCard = ({ details, isExample }) => {
  const router = useRouter();
  const gradient = getRandomGradient();
  const pdfFile = details.file;

  const pdfBlob = useMemo(() => {
    if (pdfFile && typeof pdfFile == "string") {
      const byteCharacters = atob(pdfFile.split(",")[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], { type: "application/pdf" });
    }
  }, [pdfFile]);

  const blobUrl = pdfBlob ? URL.createObjectURL(pdfBlob) : "";

  const courseInfo = [
    {
      label: `${details.totalTime} mins read`,
      imgSrc: "/icons/time.png",
    },
    {
      label: `${details.totalWords} words`,
      imgSrc: "/icons/words.png",
    },
    {
      label: `${details.score}/${details.total}`,
      imgSrc: "/icons/score.png",
    },
    {
      label: details.course,
      imgSrc: "/icons/subject.png",
    },
  ];

  const heading =
    "How does the temperature of a Copper pipe affect the time it takes a magnet to fall through";
  const redirect = isExample
    ? "coursework/example"
    : `coursework/${details.id}`;

  return (
    <div
      className={
        "cursor-pointer flex w-full items-start gap-2 rounded-[12px] border border-[#F4EAD8] p-1.5 sm:h-full lg:max-w-[440px] group hover:shadow-xl  " +
        transitionClass
      }
      style={{
        background: `${gradient}, rgba(255, 255, 255, 0.64)`,
      }}
      onClick={() => router.push(redirect)}
    >
      <div className="hidden h-[160px] w-[120px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[8px] border border-neutrals-100 lg:flex">
        <div className="flex items-center justify-center rounded-[6px] border border-neutrals-200 h-full w-full bg-white">
          <embed
            src={isExample ? "/language-sample.pdf" : blobUrl}
            type="application/pdf"
            width="100%"
            height="100%"
            className="rounded-[12px] p-4 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start gap-1.5">
        <div className="flex  w-[225px] flex-col items-center justify-center gap-1 px-2 py-1">
          <p className="line-clamp-2 self-stretch overflow-hidden text-ellipsis text-[18px] font-extrabold leading-[normal] text-neutrals-800">
            {isExample ? heading : details.title}
          </p>
        </div>
        <div className="flex w-[225px] items-center gap-[3px] p-[2px] pr-2 pl-2">
          <p className="text-[12px] font-normal leading-[normal] text-neutrals-600 line-clamp-2">
            {heading}
          </p>
        </div>

        <div className="flex flex-wrap items-start gap-2 self-stretch px-2">
          <div className="flex items-center gap-[3px] rounded-full bg-white p-[2px] pr-2 pl-2 group-hover:scale-110">
            <p className="text-[11px] font-bold leading-[normal] text-neutrals-700 ">
              {details.subject ?? "Language"}
            </p>
          </div>
          {courseInfo.map((info, index) => (
            <div
              key={info.label + index}
              className="flex items-center gap-[3px] rounded-full bg-white p-[2px] pr-2 group-hover:scale-110"
            >
              <img
                alt="image"
                loading="lazy"
                src={`${info.imgSrc}`}
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="size-[16px] shrink-0"
                style={{ color: "transparent" }}
              />
              <p className="text-[11px] font-bold leading-[normal] text-neutrals-700 ">
                {info.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
