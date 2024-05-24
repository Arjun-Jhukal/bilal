import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content flex justify-between items-center pt-4 pb-8">
          <div className="header-content-actions flex justify-start items-center gap-2">
            <button type="button">
              <Image src={"/ri_more-fill.svg"} alt="" width={24} height={25} />
            </button>
            <button type="button" className="btn-filled-white">
              <Image src={"/mingcute_search-line.svg"} alt="" width={24} height={25} />
            </button>
            <button type="button" className="bg-white p-2 rounded-[50%] hover:opacity-75 ">
              <Image src={"/ic_outline-diamond.svg"} alt="" width={24} height={25} />
            </button>
          </div>
          <div className="header-logo">
            <h1 className="text-[24px] font-[600]">ویب سائٹ</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
