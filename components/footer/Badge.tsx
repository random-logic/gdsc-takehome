import Logo from "@/public/gdsc-footer-logo.svg";
import Image from "next/image";
import Spacer from "@/components/Spacer";

export default function Badge() {
  return <div>
    <div className="flex justify-center">
      <Image src={Logo} alt="Logo" />
    </div>
    <Spacer rem={0.5} />
    <p className="p2 font-bold text-grey leading-[150%] text-center">Google Developer Student Clubs</p>
    <Spacer rem={0.5} />
    <p className="p3 text-grey leading-[150%] text-center">University of California, Davis</p>
  </div>;
}
