import React from "react";
import TopNavigation from "./TopNavigation";
import LeftSidebar from "./LeftSidebar";
import Dashboard from "./Dashboard";
import WorkflowTable from "./WorkflowTable";
import CopilotPanel from "./CopilotPanel";

const WorkflowsHome: React.FC = () => {
  return (
    <div className="overflow-hidden bg-[#F5F8FA]">
      <TopNavigation />
      <div className="flex w-full items-stretch flex-1 flex-wrap h-full max-md:max-w-full">
        <LeftSidebar />
        <div className="min-w-60 overflow-hidden flex-1 shrink basis-[0%] pt-6 px-6 max-md:max-w-full">
          <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
            <div className="text-[#191919] self-stretch min-w-60 min-h-9 gap-1 text-2xl font-bold leading-none my-auto">
              My Workflow Insights
            </div>
            <button className="min-w-20 justify-center items-center rounded shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] self-stretch flex min-h-9 gap-2 text-[13px] text-white font-semibold whitespace-nowrap bg-[#107DBC] my-auto px-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfe335420a79da3bec039330e260de38b4972f39?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                alt="New icon"
              />
              <div className="text-white self-stretch my-auto">New</div>
            </button>
          </div>
          <Dashboard />
          <WorkflowTable />
        </div>
        <CopilotPanel />
      </div>
    </div>
  );
};

export default WorkflowsHome;
