import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer-menu  ">
      <div className="container">
        <nav className="footer-nav">
          <ul className="footer-nav-items flex justify-between items-center py-4">
            <li>
              <Link href={"#"}>
                <Image src={"/flowbite_home-solid.png"} alt="Home Icon" width={25} height={25} />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image src={"/uil_calender.png"} alt="Calender Icon" width={25} height={25} />
              </Link>
            </li>
            <li>
              <Link href={"#"} className="btn-add">
                <Image src={"/ic_round-plus.svg"} alt="Home Icon" width={46} height={46} />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image src={"/majesticons_image-line.png"} alt="Home Icon" width={25} height={25} />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image src={"/iconamoon_settings.png"} alt="Home Icon" width={25} height={25} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
