import Image from "next/image";
import React from "react";

export default function FeaturedSection() {
  return (
    <section className="featured">
      <div className="container">
        <div className="featured-content text-center mb-20">
          <div className="featured-content-image ">
            <Image src={"/featured-image.png"} alt="" width={232} height={232} className="mx-auto" />
          </div>
          <div className="feature-content-text">
            <h1 className="text-[24px] font-[500]">ایچ ٹی ایم ایل</h1>
            <p className="text-[18px] text-gray-400">پرفارمنس آپٹیمائزیشن</p>
          </div>
        </div>
      </div>
    </section>
  );
}
