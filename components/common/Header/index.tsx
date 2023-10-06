import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SideNav } from "components";
import { logo } from "assets/images";
import styles from "./header.module.scss";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const activeRoute = router.asPath;
  const activeRouteClass = (route: string) => {
    if (activeRoute.includes(route))
      return `px-3 text-lg text-white ${styles["active"]}`;

    return `px-3 text-lg text-white`;
  };

  return (
    <>
      <header className={`${styles.container} container`}>
        <div
          className={`${styles.body} py-10 md:py-20 flex justify-between items-center`}
        >
          <div className="">
            <div className="flex w-8/12 lg:w-full">
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={60}
                className=""
              />
            </div>
          </div>
          {/* <div className="md:hidden">
            <MenuIcon />
          </div> */}
          <SideNav />

          <ul
            className={`${styles.links} gap-x-8 hidden md:flex justify-between relative  ml-auto `}
          >
            <li className="md:text-base font-bold text-grey-1">
              <Link href="/">
                <a>ABOUT OUR CITY</a>
              </Link>
            </li>
            <li className="md:text-base font-bold text-grey-1">
              <Link href="/">
                <a>CITY COUNCIL</a>
              </Link>
            </li>
            <li className="md:text-base font-bold text-grey-1">
              <Link href="/">
                <a>CITYNOMICS</a>
              </Link>
            </li>
            <li className="md:text-base font-bold text-grey-1">
              <Link href="/">
                <a>CITYMAP</a>
              </Link>
            </li>
            <li className="md:text-base font-bold text-grey-1">
              <Link href="/">
                <a>WORD ON THE STREET</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export { Header };
