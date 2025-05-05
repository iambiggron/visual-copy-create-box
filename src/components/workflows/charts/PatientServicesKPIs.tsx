import React from "react";

const PatientServicesKPIs: React.FC = () => {
  return (
    <div className="border border-[color:var(--interface-border1,#D2D8DB)] bg-white min-w-60 min-h-56 overflow-hidden flex-1 shrink basis-[0%] rounded-lg border-solid max-md:max-w-full">
      <div className="flex w-full items-center gap-2 text-xl text-[#191919] font-semibold flex-wrap pl-4 pr-3 py-3 max-md:max-w-full">
        <div className="text-[#191919] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          Patient Services KPIs
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f8716751ad36f86dd5beec50d72a4caf929447?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto"
          alt="Chart options"
        />
      </div>
      <div className="justify-between border-b-[color:var(--interface-border2,#EBEBEB)] flex w-full gap-5 overflow-hidden text-center flex-1 flex-wrap h-full pt-2 px-9 border-b border-solid max-md:max-w-full max-md:px-5">
        <div className="flex flex-col items-stretch w-32">
          <div className="self-center flex max-w-full w-32 flex-col items-center text-[#767676] font-normal leading-none px-[13px] py-[26px] rounded-lg max-md:px-5">
            <div className="text-[#767676] text-sm">KPI</div>
            <div className="text-[#191919] text-2xl font-bold capitalize mt-[7px]">
              75%
            </div>
            <div className="text-[#767676] text-xs leading-[14px] self-stretch mt-1">
              Gap to target
              <br />
              <span className="font-bold">2%</span>
            </div>
          </div>
          <div className="text-[#191919] text-xs font-semibold leading-3">
            Automation Containment Rate
          </div>
        </div>
        <div className="flex flex-col items-stretch w-32">
          <div className="self-center flex max-w-full w-32 flex-col items-center text-[#767676] font-normal leading-none px-[13px] py-[26px] rounded-lg max-md:px-5">
            <div className="text-[#767676] text-sm">KPI</div>
            <div className="text-[#191919] text-2xl font-bold capitalize mt-[7px]">
              72%
            </div>
            <div className="text-[#767676] text-xs leading-[14px] self-stretch mt-1">
              Gap to target
              <br />
              <span className="font-bold">3%</span>
            </div>
          </div>
          <div className="text-[#191919] text-xs font-semibold leading-3">
            First Contact Resolution
          </div>
        </div>
        <div className="flex flex-col items-stretch w-32">
          <div className="self-center flex max-w-full w-32 flex-col items-center px-[13px] py-[17px] rounded-[0px_0px_0px_0px] max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e006ed6a35654177b65fc87b4fbf96982fa0f86?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5"
              alt="Sentiment icon"
            />
            <div className="text-[#191919] text-2xl font-bold leading-none capitalize mt-1">
              65
            </div>
            <div className="text-[#767676] text-xs font-normal leading-[14px] mt-1">
              Average Sentiment Score
            </div>
          </div>
          <div className="text-[#191919] text-xs font-semibold leading-none">
            Average Sentiment
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientServicesKPIs;
