import React from "react";
import WorkflowTableRow from "./WorkflowTableRow";

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

const WorkflowTable: React.FC = () => {
  // Sample workflow data
  const workflows: WorkflowData[] = [
    {
      id: 1,
      name: "Appointment Scheduling",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9efb3ed401b94bbee204dd3433d513b5fcc0d2e1?placeholderIfAbsent=true",
      updatedTime: "8 hours ago",
      volume: {
        value: "297,470",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/df983d8fe23049d6eecd4bedf8c24c16b343b378?placeholderIfAbsent=true",
      },
      containment: {
        value: "71%",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31ce67b809dead608d3da0b7f2d617dffe103c60?placeholderIfAbsent=true",
      },
      avgTime: {
        value: "4m 38s",
        trend: "down",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/13b16d91676f17ec46d968cb520f6f6c6a1cbed7?placeholderIfAbsent=true",
      },
      metrics: {
        customerEffort: {
          value: "30s",
          trend: "up",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6890535b6715a840ba260a6e634821b3fd6c41a8?placeholderIfAbsent=true",
        },
        brokenPromises: {
          value: "2%",
          trend: "down",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/13b16d91676f17ec46d968cb520f6f6c6a1cbed7?placeholderIfAbsent=true",
        },
        sentiment: {
          value: "84",
          trend: "up",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31ce67b809dead608d3da0b7f2d617dffe103c60?placeholderIfAbsent=true",
        },
      },
    },
    {
      id: 2,
      name: "Prescription Refill",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fef74eb731cac39987b90c071518932e6a596c6d?placeholderIfAbsent=true",
      updatedTime: "1 days ago",
      volume: {
        value: "223,078",
        trend: "neutral",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e563bc765aeac6487f6ca6055b0cf25e9edc550?placeholderIfAbsent=true",
      },
      containment: {
        value: "53%",
        trend: "down",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9af694404d5e393dcd5553f6fb9e13bf087c8bc0?placeholderIfAbsent=true",
      },
      avgTime: {
        value: "6m 59s",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6890535b6715a840ba260a6e634821b3fd6c41a8?placeholderIfAbsent=true",
      },
      metrics: {
        customerEffort: {
          value: "41s",
          trend: "neutral",
          icon: "",
        },
        brokenPromises: {
          value: "0%",
          trend: "neutral",
          icon: "",
        },
        sentiment: {
          value: "71",
          trend: "down",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9af694404d5e393dcd5553f6fb9e13bf087c8bc0?placeholderIfAbsent=true",
        },
      },
    },
    {
      id: 3,
      name: "Follow-up Calls",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/065ce98d9513221324e39e5bcb871517851d1c7d?placeholderIfAbsent=true",
      updatedTime: "2 days ago",
      volume: {
        value: "153,700",
        trend: "neutral",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e563bc765aeac6487f6ca6055b0cf25e9edc550?placeholderIfAbsent=true",
      },
      containment: {
        value: "61%",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31ce67b809dead608d3da0b7f2d617dffe103c60?placeholderIfAbsent=true",
      },
      avgTime: {
        value: "7m 2s",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6890535b6715a840ba260a6e634821b3fd6c41a8?placeholderIfAbsent=true",
      },
      metrics: {
        customerEffort: {
          value: "1m 13s",
          trend: "up",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6890535b6715a840ba260a6e634821b3fd6c41a8?placeholderIfAbsent=true",
        },
        brokenPromises: {
          value: "2%",
          trend: "up",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6890535b6715a840ba260a6e634821b3fd6c41a8?placeholderIfAbsent=true",
        },
        sentiment: {
          value: "52",
          trend: "down",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9af694404d5e393dcd5553f6fb9e13bf087c8bc0?placeholderIfAbsent=true",
        },
      },
    },
    {
      id: 4,
      name: "Find a Doctor",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f77788c884ee7b7d4713e39d060a16ceb144f5da?placeholderIfAbsent=true",
      updatedTime: "12 days ago",
      volume: {
        value: "251,371",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/df983d8fe23049d6eecd4bedf8c24c16b343b378?placeholderIfAbsent=true",
      },
      containment: {
        value: "54%",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31ce67b809dead608d3da0b7f2d617dffe103c60?placeholderIfAbsent=true",
      },
      avgTime: {
        value: "11m 37s",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6890535b6715a840ba260a6e634821b3fd6c41a8?placeholderIfAbsent=true",
      },
      metrics: {
        customerEffort: {
          value: "3m 24s",
          trend: "down",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/13b16d91676f17ec46d968cb520f6f6c6a1cbed7?placeholderIfAbsent=true",
        },
        brokenPromises: {
          value: "3%",
          trend: "down",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/13b16d91676f17ec46d968cb520f6f6c6a1cbed7?placeholderIfAbsent=true",
        },
        sentiment: {
          value: "46",
          trend: "down",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9af694404d5e393dcd5553f6fb9e13bf087c8bc0?placeholderIfAbsent=true",
        },
      },
    },
    {
      id: 5,
      name: "Patient Registration",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6153d89fca90bf8f541ed769317102df005a238?placeholderIfAbsent=true",
      updatedTime: "14 days ago",
      volume: {
        value: "370,020",
        trend: "neutral",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e563bc765aeac6487f6ca6055b0cf25e9edc550?placeholderIfAbsent=true",
      },
      containment: {
        value: "63%",
        trend: "down",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9af694404d5e393dcd5553f6fb9e13bf087c8bc0?placeholderIfAbsent=true",
      },
      avgTime: {
        value: "23m 12s",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6890535b6715a840ba260a6e634821b3fd6c41a8?placeholderIfAbsent=true",
      },
      metrics: {
        customerEffort: {
          value: "17m 23s",
          trend: "down",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/13b16d91676f17ec46d968cb520f6f6c6a1cbed7?placeholderIfAbsent=true",
        },
        brokenPromises: {
          value: "0%",
          trend: "neutral",
          icon: "",
        },
        sentiment: {
          value: "19",
          trend: "down",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9af694404d5e393dcd5553f6fb9e13bf087c8bc0?placeholderIfAbsent=true",
        },
      },
    },
    {
      id: 6,
      name: "Billing Inquiries",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c2afcdd5c5b86f56e332ac1779b2f793a675a22?placeholderIfAbsent=true",
      updatedTime: "21 days ago",
      volume: {
        value: "170,300",
        trend: "neutral",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e563bc765aeac6487f6ca6055b0cf25e9edc550?placeholderIfAbsent=true",
      },
      containment: {
        value: "39%",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31ce67b809dead608d3da0b7f2d617dffe103c60?placeholderIfAbsent=true",
      },
      avgTime: {
        value: "9m 8s",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6890535b6715a840ba260a6e634821b3fd6c41a8?placeholderIfAbsent=true",
      },
      metrics: {
        customerEffort: {
          value: "5m 2s",
          trend: "down",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/13b16d91676f17ec46d968cb520f6f6c6a1cbed7?placeholderIfAbsent=true",
        },
        brokenPromises: {
          value: "3%",
          trend: "down",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/13b16d91676f17ec46d968cb520f6f6c6a1cbed7?placeholderIfAbsent=true",
        },
        sentiment: {
          value: "34",
          trend: "up",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31ce67b809dead608d3da0b7f2d617dffe103c60?placeholderIfAbsent=true",
        },
      },
    },
    {
      id: 7,
      name: "Online Nurse Consulting",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b80de5011aab63ef4b3dfe5249b26dbbde431bb9?placeholderIfAbsent=true",
      updatedTime: "28 days ago",
      volume: {
        value: "112,650",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/df983d8fe23049d6eecd4bedf8c24c16b343b378?placeholderIfAbsent=true",
      },
      containment: {
        value: "56%",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31ce67b809dead608d3da0b7f2d617dffe103c60?placeholderIfAbsent=true",
      },
      avgTime: {
        value: "13m 21s",
        trend: "down",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/13b16d91676f17ec46d968cb520f6f6c6a1cbed7?placeholderIfAbsent=true",
      },
      metrics: {
        customerEffort: {
          value: "3m 32s",
          trend: "up",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6890535b6715a840ba260a6e634821b3fd6c41a8?placeholderIfAbsent=true",
        },
        brokenPromises: {
          value: "0%",
          trend: "neutral",
          icon: "",
        },
        sentiment: {
          value: "73",
          trend: "up",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31ce67b809dead608d3da0b7f2d617dffe103c60?placeholderIfAbsent=true",
        },
      },
    },
    {
      id: 8,
      name: "Uncategorized Workflows",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa3bd92b865b6b66f8c57871dd15f6380ee7ba11?placeholderIfAbsent=true",
      updatedTime: "30 days ago",
      volume: {
        value: "60,807",
        trend: "down",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc26845e07011eebac97a858ebdf756ef9fb5245?placeholderIfAbsent=true",
      },
      containment: {
        value: "41%",
        trend: "neutral",
        icon: "",
      },
      avgTime: {
        value: "8m 12s",
        trend: "down",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3bbe7b0aeb79673de00b9f01f2871b6ddbeb5b58?placeholderIfAbsent=true",
      },
      metrics: {
        customerEffort: {
          value: "3m 48s",
          trend: "down",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3bbe7b0aeb79673de00b9f01f2871b6ddbeb5b58?placeholderIfAbsent=true",
        },
        brokenPromises: {
          value: "3%",
          trend: "up",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef2428cf13bb137db7d0b068d5e368e198775f0f?placeholderIfAbsent=true",
        },
        sentiment: {
          value: "54",
          trend: "up",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8745e36ef877a31a7ed991c816610e447728a165?placeholderIfAbsent=true",
        },
      },
    },
    {
      id: 9,
      name: "Pre-Authorization",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ca23420de72d0e441aa9ba3df25e73bee53f78e?placeholderIfAbsent=true",
      updatedTime: "42 days ago",
      volume: {
        value: "207,090",
        trend: "down",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/341743993102a2dfffa4ac247c54ce7cbda3f553?placeholderIfAbsent=true",
      },
      containment: {
        value: "81%",
        trend: "up",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8745e36ef877a31a7ed991c816610e447728a165?placeholderIfAbsent=true",
      },
      avgTime: {
        value: "7m 52s",
        trend: "down",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3bbe7b0aeb79673de00b9f01f2871b6ddbeb5b58?placeholderIfAbsent=true",
      },
      metrics: {
        customerEffort: {
          value: "1m 21s",
          trend: "up",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef2428cf13bb137db7d0b068d5e368e198775f0f?placeholderIfAbsent=true",
        },
        brokenPromises: {
          value: "1%",
          trend: "neutral",
          icon: "",
        },
        sentiment: {
          value: "53",
          trend: "up",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8745e36ef877a31a7ed991c816610e447728a165?placeholderIfAbsent=true",
        },
      },
    },
  ];

  return (
    <section className="w-full flex-1 mt-6 max-md:max-w-full">
      <div className="flex w-full items-center gap-[40px_100px] text-xs font-semibold leading-none justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch flex items-center gap-1 my-auto">
          <div className="text-[#767676] self-stretch my-auto">Filter:</div>
          <div className="text-[#191919] self-stretch my-auto">
            Active workflows
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b123da86c6b370a73b7282f286956b920a5c73f?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            alt="Filter dropdown"
          />
        </div>
        <div className="self-stretch flex items-center gap-4 my-auto">
          <div className="self-stretch flex items-center gap-1 my-auto">
            <div className="text-[#767676] self-stretch my-auto">Sort:</div>
            <div className="text-[#191919] self-stretch my-auto">
              Last modified
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b123da86c6b370a73b7282f286956b920a5c73f?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Sort dropdown"
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e3cac1a8cc5e16dfa21dcd1a562d3dfb525e5f7?placeholderIfAbsent=true"
            className="aspect-[2] object-contain w-[72px] self-stretch shrink-0 my-auto"
            alt="View options"
          />
        </div>
      </div>
      <div className="w-full flex-1 mt-2 max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch justify-center pr-3 py-3 max-md:max-w-full">
          <div className="flex w-full gap-6 justify-center flex-wrap max-md:max-w-full">
            <div className="text-[#333] text-xs font-semibold leading-none flex-1 shrink basis-[0%]">
              Name
            </div>
            <div className="flex items-center gap-1 text-xs text-[#333] font-semibold whitespace-nowrap leading-none w-[100px]">
              <div className="text-[#333] self-stretch my-auto">Updated</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e563bc765aeac6487f6ca6055b0cf25e9edc550?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                alt="Sort icon"
              />
            </div>
            <div className="text-[#333] self-stretch w-36 gap-1 text-xs font-semibold leading-none">
              Avg. Monthly Volume
            </div>
            <div className="text-[#333] text-xs font-semibold leading-none w-[90px]">
              Auto Contain %
            </div>
            <div className="text-[#333] text-xs font-semibold leading-none w-[100px]">
              Avg. Time
            </div>
            <div className="flex min-w-60 gap-3">
              <div className="flex min-w-60 flex-col items-center text-center px-3">
                <div className="text-[#564580] text-[13px] font-bold leading-none">
                  Enlighten AI Metrics
                </div>
                <div className="flex items-center gap-6 text-xs text-[#333] font-semibold leading-none mt-1">
                  <div className="text-[#333] self-stretch my-auto">
                    Customer Effort
                  </div>
                  <div className="text-[#333] self-stretch my-auto">
                    Broken Promises
                  </div>
                  <div className="text-[#333] self-stretch my-auto">
                    Sentiment
                  </div>
                </div>
              </div>
              <div className="justify-center items-center rounded flex min-h-9 w-9 h-9 bg-[rgba(5,19,26,0.00)]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4276c9dd7a9829efa6b150b5b96293edb5c4a68?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-4 self-stretch my-auto"
                  alt="Options"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden flex-1 max-md:max-w-full">
          {workflows.map((workflow) => (
            <WorkflowTableRow key={workflow.id} workflow={workflow} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowTable;
