"use client";

import Image from 'next/image';
import GdscLogo from '/public/gdsc-navbar-logo.svg';
import MenuOptions from "@/components/navbar/MenuOptions";
import Section from "@/components/Section";
import {useState} from "react";
import Menu_Bars from "@/public/Menu_Bars.svg";
import X from "@/public/X.svg";
import { useMediaQuery } from 'react-responsive';

export default function Navbar() {
  const [hide, setHide] = useState(true);
  const isMd = useMediaQuery({ minWidth: 768 });

  return <Section>
    <div className="navbar">
      <div className="flex justify-between items-center w-[100%]">
        <Image src={GdscLogo} alt="gdsc-logo" className="w-[4.125rem] h-[2.0625rem]"></Image>
        <button onClick={() => setHide(!hide)} className="md:hidden">
          <Image src={hide ? Menu_Bars : X} alt={hide ? "Menu" : "X"} />
        </button>
      </div>
      {
        (!hide || isMd) &&
          <MenuOptions items={[
            {
              name: "About",
              link: "/",
            },
            {
              name: "Projects",
              link: "/",
            },
            {
              name: "FAQ",
              link: "/",
            },
            {
              name: "Contact",
              link: "/",
            },
            {
              name: "Join",
              link: "/",
              emphasized: true,
            }
          ]} />
      }
    </div>
  </Section>;
}
