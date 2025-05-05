import React from "react";

const TopNavigation: React.FC = () => {
  return (
    <header className="shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex w-full items-stretch gap-5 flex-wrap justify-between pr-2 max-md:max-w-full">
      <div className="flex items-stretch">
        <div className="bg-[rgba(0,0,0,0.1)] flex min-h-14 items-center gap-2.5 justify-center px-2.5 py-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9516a534f14592860e1093826c4be5379e951248?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch my-auto"
            alt="App picker"
          />
        </div>
        <div className="self-stretch min-h-14 gap-2 text-base text-white font-semibold grow shrink basis-auto px-4 py-[17px]">
          CXone Mpower Orchestrator
        </div>
      </div>
      <div className="flex items-stretch gap-[40px_100px] flex-wrap my-auto max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e9e3a6fb1bd722e08d86ae0b9edf69ed410d260?placeholderIfAbsent=true"
          className="aspect-[1.88] object-contain w-[75px] shrink-0 my-auto"
          alt="Logo"
        />
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7667ccd70ec9332ee290b48d05fc84c1124e4b6?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-11 rounded self-stretch shrink-0 my-auto"
            alt="User avatar"
          />
          <div className="bg-[rgba(255,255,255,0.2)] self-stretch flex w-px shrink-0 h-8 my-auto" />
          <div className="justify-center items-center rounded self-stretch flex min-h-11 gap-2.5 w-11 my-auto px-2.5 py-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32bb148dbccc3bcf97829a1e26e44a563c8b4195?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 self-stretch my-auto"
              alt="Navigation icon"
            />
          </div>
          <div className="bg-[rgba(255,255,255,0.2)] self-stretch flex w-px shrink-0 h-8 my-auto" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/60ec6b0173472ef3d87d2c1260d59175f16285a9?placeholderIfAbsent=true"
            className="aspect-[1.68] object-contain w-[74px] rounded self-stretch shrink-0 my-auto"
            alt="Right control"
          />
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
