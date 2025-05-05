import React from "react";

// Define workflow data type
interface WorkflowData {
  id: number;
  name: string;
  icon: string;
  updatedTime: string;
  volume: {
    value: string;
    trend: "up" | "down" | "neutral";
    icon: string;
  };
  containment: {
    value: string;
    trend: "up" | "down" | "neutral";
    icon: string;
  };
  avgTime: {
    value: string;
    trend: "up" | "down" | "neutral";
    icon: string;
  };
  metrics: {
    customerEffort: {
      value: string;
      trend: "up" | "down" | "neutral";
      icon: string;
    };
    brokenPromises: {
      value: string;
      trend: "up" | "down" | "neutral";
      icon?: string;
    };
    sentiment: {
      value: string;
      trend: "up" | "down" | "neutral";
      icon: string;
    };
  };
}

interface WorkflowTableRowProps {
  workflow: WorkflowData;
}

const WorkflowTableRow: React.FC<WorkflowTableRowProps> = ({ workflow }) => {
  // Helper function to determine text color based on trend
  const getTrendColor = (trend: "up" | "down" | "neutral"): string => {
    switch (trend) {
      case "up":
        return "text-[#008940]";
      case "down":
        return "text-[#E4263C]";
      default:
        return "text-[#333]";
    }
  };

  const volumeColor = getTrendColor(workflow.volume.trend);
  const containmentColor = getTrendColor(workflow.containment.trend);
  const avgTimeColor = getTrendColor(workflow.avgTime.trend);
  const effortColor = getTrendColor(workflow.metrics.customerEffort.trend);
  const promisesColor = getTrendColor(workflow.metrics.brokenPromises.trend);
  const sentimentColor = getTrendColor(workflow.metrics.sentiment.trend);

  return (
    <div className="items-center border border-[color:var(--interface-border1,#D2D8DB)] bg-white flex min-h-16 w-full gap-6 overflow-hidden flex-wrap mt-1 px-3 py-3.5 rounded-lg border-solid max-md:max-w-full">
      <div className="self-stretch flex min-w-60 items-stretch gap-2 text-[13px] text-[#191919] font-semibold leading-loose flex-1 shrink basis-[0%] my-auto">
        <img
          src={workflow.icon}
          className="aspect-[1] object-contain w-5 shrink-0"
          alt={workflow.name}
        />
        <div className="text-[#191919] text-ellipsis w-[520px] max-md:max-w-full">
          {workflow.name}
        </div>
      </div>
      <div className="text-[#767676] text-xs font-normal leading-none self-stretch w-[100px] my-auto">
        {workflow.updatedTime}
      </div>
      <div className="self-stretch flex flex-col text-xs text-[#333] font-semibold whitespace-nowrap w-36 my-auto">
        <div className="flex items-center gap-1 justify-center rounded-xl">
          {workflow.volume.icon && (
            <img
              src={workflow.volume.icon}
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Trend icon"
            />
          )}
          <div className="text-[#333] self-stretch my-auto">
            {workflow.volume.value}
          </div>
        </div>
      </div>
      <div
        className={`self-stretch flex flex-col text-xs ${containmentColor} font-semibold whitespace-nowrap w-[90px] my-auto`}
      >
        <div className="flex items-center gap-1 justify-center rounded-xl">
          {workflow.containment.icon && (
            <img
              src={workflow.containment.icon}
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Trend icon"
            />
          )}
          <div className={`${containmentColor} self-stretch my-auto`}>
            {workflow.containment.value}
          </div>
        </div>
      </div>
      <div
        className={`self-stretch flex items-center gap-3 text-xs ${avgTimeColor} font-semibold w-[100px] my-auto`}
      >
        <div className="self-stretch flex items-center gap-1 justify-center my-auto rounded-xl">
          {workflow.avgTime.icon && (
            <img
              src={workflow.avgTime.icon}
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Trend icon"
            />
          )}
          <div className={`${avgTimeColor} self-stretch my-auto`}>
            {workflow.avgTime.value}
          </div>
        </div>
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-3 my-auto">
        <div className="items-center border-r-[color:var(--interface-border1,#D2D8DB)] border-l-[color:var(--interface-border1,#D2D8DB)] self-stretch flex min-w-60 gap-6 text-xs font-semibold whitespace-nowrap my-auto px-3 border-r border-solid border-l">
          <div
            className={`self-stretch flex flex-col w-[93px] my-auto ${effortColor}`}
          >
            {workflow.metrics.customerEffort.icon ? (
              <div className="flex items-center gap-1 justify-center rounded-xl">
                <img
                  src={workflow.metrics.customerEffort.icon}
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  alt="Trend icon"
                />
                <div className={`${effortColor} self-stretch my-auto`}>
                  {workflow.metrics.customerEffort.value}
                </div>
              </div>
            ) : (
              <div className="text-[#333] self-stretch gap-1 pl-5 rounded-xl">
                {workflow.metrics.customerEffort.value}
              </div>
            )}
          </div>
          <div
            className={`self-stretch flex items-center gap-3 ${promisesColor} w-[99px] my-auto`}
          >
            {workflow.metrics.brokenPromises.icon ? (
              <div className="self-stretch flex items-center gap-1 justify-center my-auto rounded-xl">
                <img
                  src={workflow.metrics.brokenPromises.icon}
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  alt="Trend icon"
                />
                <div className={`${promisesColor} self-stretch my-auto`}>
                  {workflow.metrics.brokenPromises.value}
                </div>
              </div>
            ) : (
              <div className="text-[#333] self-stretch gap-1 my-auto pl-5 rounded-xl">
                {workflow.metrics.brokenPromises.value}
              </div>
            )}
          </div>
          <div
            className={`self-stretch flex flex-col ${sentimentColor} whitespace-nowrap w-[60px] my-auto`}
          >
            <div className="flex items-center gap-1 justify-center rounded-xl">
              {workflow.metrics.sentiment.icon && (
                <img
                  src={workflow.metrics.sentiment.icon}
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  alt="Trend icon"
                />
              )}
              <div className={`${sentimentColor} self-stretch my-auto`}>
                {workflow.metrics.sentiment.value}
              </div>
            </div>
          </div>
        </div>
        <button className="justify-center items-center rounded self-stretch flex min-h-9 w-9 h-9 bg-[rgba(5,19,26,0.00)] my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/390e3c639cf74de8dbc33e55f514c716e3ab29ba?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch my-auto"
            alt="Options"
          />
        </button>
      </div>
    </div>
  );
};

export default WorkflowTableRow;
