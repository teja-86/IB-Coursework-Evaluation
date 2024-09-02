import LeftSidebar from "@/components/LeftSidebar";
import Sidebar from "@/components/Sidebar";

export default function CourseworkLayout({ children }) {
  return (
    <div className="flex max-w-full xl:space-x-2">
      <Sidebar />
      {children}
      <LeftSidebar />
    </div>
  );
}
