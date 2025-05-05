import React from "react";

const InteractionVolume: React.FC = () => {
  return (
    <div className="border border-[color:var(--interface-border1,#D2D8DB)] bg-white min-h-56 overflow-hidden w-56 rounded-lg border-solid">
      <div className="flex w-full items-center gap-2 text-xl text-[#191919] font-semibold pl-4 pr-3 py-3">
        <div className="text-[#191919] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">
          Interaction Vol.
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a39e3ff858815ceb71a85a5caaa65ca200470381?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto"
          alt="Chart options"
        />
      </div>
      <div className="justify-center items-center border-b-[color:var(--interface-border2,#EBEBEB)] flex w-full flex-col overflow-hidden whitespace-nowrap leading-none flex-1 border-b border-solid">
        <div className="text-[#191919] text-5xl font-bold capitalize max-md:text-[40px]">
          3,191
        </div>
        <div className="text-[#767676] text-2xl font-normal mt-4">total</div>
      </div>
    </div>
  );
};

export default InteractionVolume;
