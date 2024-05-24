import Image from "next/image";
import React from "react";

export default function PageBanner() {
  return (
    <section className="page-banner mb-12">
      <div className="container">
        <div className="page-banner-content">
          <h1 className="text-[24px] font-[500] mb-4 text-white">یوزر ایکسپیرینس</h1>
          <ul className="flex justify-between items-center">
            <li>
              <button type="button" className="btn-filled-white">
                <Image src={"/ic_outline-diamond.svg"} alt="" width={24} height={24} />
              </button>
            </li>
            <li>
              <button type="button" className="btn-filled-white">
                <span>2</span>
              </button>
            </li>
            <li>
              <button type="button" className="btn-filled-white">
                <span>1</span>
              </button>
            </li>
          </ul>
          <button type="button" className="close-icon">
            <Image src={"/pajamas_close.png"} alt="" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
