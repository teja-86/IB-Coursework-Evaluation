import React, { useMemo } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import SvgFullScreenIcon from "../../public/icons/SvgFullScreenIcon";
import SvgExpandIcon from "../../public/icons/SvgExpandIcon";
import { transitionClass } from "@/lib/globalConstants";

const PdfViewer = ({
  pdfFile,
  pdfName,
  isCollapsed,
  handleCollapse,
  isExample,
}) => {
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, CurrentScale } = zoomPluginInstance;
  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreenButton } = fullScreenPluginInstance;

  const pdfBlob = useMemo(() => {
    if (!isExample && pdfFile && typeof pdfFile == "string") {
      const byteCharacters = atob(pdfFile.split(",")[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], { type: "application/pdf" });
    }
  }, [pdfFile, isExample]);

  const blobUrl = isExample
    ? "/language-sample.pdf"
    : URL.createObjectURL(pdfBlob);

  return (
    <div
      className={`w-full max-w-[972px] ${
        isCollapsed ? false : "flex-1"
      } ${transitionClass} overflow-hidden hover:shadow-2xl rounded-3xl rounded-b-none sm:min-w-[280px] lg:min-w-[50%]`}
    >
      <div className="flex flex-wrap justify-between gap-2 bg-[rgba(255,255,255,0.48)] p-3">
        <div className="flex max-w-[184px] items-center rounded-xl bg-white px-3 py-1">
          <p className="w-full  truncate font-bricolage text-sm font-semibold leading-[normal] text-[#3d404b]">
            {isExample ? "Sample" : pdfName}
          </p>
        </div>
        <div className="flex w-full items-center justify-between gap-3 xl:w-auto">
          <div className="flex items-center gap-1.5">
            <ZoomOutButton>
              {(props) => (
                <button
                  onClick={props.onClick}
                  disabled={props.isDisabled}
                  className="p-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                ></button>
              )}
            </ZoomOutButton>
            <span className="font-bricolage text-sm font-medium leading-[normal] text-[#7a8196]">
              <CurrentScale>
                {(props) => `${(props.scale * 100).toFixed(0)}%`}
              </CurrentScale>
            </span>
            <ZoomInButton>
              {(props) => (
                <button
                  onClick={props.onClick}
                  disabled={props.isDisabled}
                  className="p-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                ></button>
              )}
            </ZoomInButton>
          </div>
          <div className="flex gap-3">
            <EnterFullScreenButton>
              {(props) => (
                <button
                  onClick={props.onClick}
                  className="rounded-full bg-white p-1 hover:bg-gray-400 transition"
                >
                  <SvgFullScreenIcon />
                </button>
              )}
            </EnterFullScreenButton>
            <div
              className="hidden sm:flex items-center gap-2 rounded-full bg-white p-1 pr-3 hover:bg-gray-200 transition cursor-pointer"
              onClick={handleCollapse}
            >
              <SvgExpandIcon />
              <p className="text-xs font-bold text-[#5b6170]">
                {isCollapsed ? "Expand" : "Collapse"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="h-[calc(100lvh-175px)] overflow-y-scroll rounded-b-[24px] border border-[#c1ccd6] bg-white shadow-lg">
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
        >
          <Viewer
            fileUrl={blobUrl}
            plugins={[zoomPluginInstance, fullScreenPluginInstance]}
          />
        </Worker>
      </div>
    </div>
  );
};

export default PdfViewer;
