import React from "react";

const LeftSidebar: React.FC = () => {
  return (
    <nav className="items-stretch border-r-[color:var(--interface-border1,#D2D8DB)] bg-white flex flex-col w-[60px] border-r border-solid max-md:hidden">
      <div className="border-b-[color:var(--interface-border1,#D2D8DB)] bg-white w-full border-b border-solid">
        <div className="flex w-full flex-col overflow-hidden items-center justify-center px-5 py-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/759be3d406f11f396267ca1855cd5261f320eb87?placeholderIfAbsent=true"
            className="aspect-[1.25] object-contain w-5"
            alt="Collapse & Expand Icon"
          />
        </div>
      </div>
      <div className="self-center flex w-full max-w-[60px] flex-col items-center flex-1 p-2 max-md:hidden">
        <div className="items-center rounded flex w-full gap-2 overflow-hidden h-11 bg-[#F5F8FA] p-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dcaf9f00db92a0d8fda974af3d0fa6bc8c05347?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch my-auto"
            alt="Home"
          />
        </div>
        <div className="rounded flex w-full items-center gap-2 overflow-hidden mt-1 p-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/27bee86349c95c4ba1624ab6ac036de5fd3caa77?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch my-auto"
            alt="Recent"
          />
        </div>
        <div className="rounded flex w-full items-center gap-2 overflow-hidden mt-1 p-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca8a1a830576cd8e8eb3ca9f53098f895708321c?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch my-auto"
            alt="Favorites"
          />
        </div>
        <div className="rounded flex w-full items-center gap-2 overflow-hidden mt-1 p-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40c9327f99834bff90ec07e9c0140f273e0e603?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch my-auto"
            alt="Documents"
          />
        </div>
        <div className="rounded flex w-full items-center gap-2 overflow-hidden mt-1 p-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc89d1455af0e102e70654f43a1fc199a40de0d6?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch my-auto"
            alt="Trash"
          />
        </div>
        <div className="rounded flex w-full items-center gap-2 overflow-hidden mt-1 p-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/827f854d4dba53051fe26a4ed8247afe8648ebe9?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch my-auto"
            alt="Templates"
          />
        </div>
      </div>
    </nav>
  );
};

export default LeftSidebar;
