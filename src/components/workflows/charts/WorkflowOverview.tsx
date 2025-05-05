import React from "react";

const WorkflowOverview: React.FC = () => {
  return (
    <div className="border border-[color:var(--interface-border1,#D2D8DB)] bg-white min-w-60 min-h-56 overflow-hidden font-semibold flex-1 shrink basis-[0%] rounded-lg border-solid max-md:max-w-full">
      <div className="flex w-full items-center gap-2 text-xl text-[#191919] flex-wrap pl-4 pr-3 py-3 max-md:max-w-full">
        <div className="text-[#191919] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          Workflow Overview
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dd1b3a027ed8507ff918ddbd4d3d43384a0ddec?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto"
          alt="Chart options"
        />
      </div>
      <div className="border-b-[color:var(--interface-border2,#EBEBEB)] flex w-full gap-4 text-xs text-[#767676] leading-none flex-wrap pb-2 px-4 border-b border-solid max-md:max-w-full">
        <div className="text-[#767676] flex-1 shrink basis-[0%]">Workflow</div>
        <div className="text-[#767676] text-right w-14">Volume</div>
        <div className="text-[#767676] text-right w-14">% of all</div>
        <div className="text-[#767676] text-right leading-[14px] w-[70px]">
          Automation Contain %
        </div>
      </div>
      <div className="w-full text-[13px] text-black font-normal leading-none flex-1 px-4 py-3 max-md:max-w-full">
        <div className="flex w-full items-center gap-4 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b9e1c61f2e243d23b9f28849bf6b64a18124545?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            alt="Workflow icon"
          />
          <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
            Patient Registration
          </div>
          <div className="text-right self-stretch w-14 my-auto">370,020</div>
          <div className="text-right self-stretch w-14 my-auto">16.5%</div>
          <div className="text-right self-stretch w-[70px] my-auto">63%</div>
        </div>
        <div className="flex w-full items-center gap-4 mt-3 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/33b7e7aa2179ac171e281aaa78d37187f4cfed71?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            alt="Workflow icon"
          />
          <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
            Appointment Scheduling
          </div>
          <div className="text-right self-stretch w-14 my-auto">297,470</div>
          <div className="text-right self-stretch w-14 my-auto">13.2%</div>
          <div className="text-right self-stretch w-[70px] my-auto">71%</div>
        </div>
        <div className="flex w-full items-center gap-4 mt-3 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce014fa12639d49cb240ee9228eda1a69e3b8778?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            alt="Workflow icon"
          />
          <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
            Find a Doctor
          </div>
          <div className="text-right self-stretch w-14 my-auto">251,371</div>
          <div className="text-right self-stretch w-14 my-auto">11.2%</div>
          <div className="text-right self-stretch w-[70px] my-auto">54%</div>
        </div>
        <div className="flex w-full items-center gap-4 mt-3 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bd6198932d7a5f444806eff3f4f5a2c70f6c7d5?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            alt="Workflow icon"
          />
          <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
            Prescription Refill
          </div>
          <div className="text-right self-stretch w-14 my-auto">223,078</div>
          <div className="text-right self-stretch w-14 my-auto">9.9%</div>
          <div className="text-right self-stretch w-[70px] my-auto">53%</div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowOverview;
