import Image from 'next/image';
import GdscLogo from '/public/gdsc-navbar-logo.svg';
import MenuOptions from "@/components/navbar/MenuOptions";
import Section from "@/components/Section";

export default function Navbar() {
  return <Section>
    <div className="navbar">
      <Image src={GdscLogo} alt="gdsc-logo" className="w-[4.125rem] h-[2.0625rem]"></Image>
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
    </div>
  </Section>;
}
