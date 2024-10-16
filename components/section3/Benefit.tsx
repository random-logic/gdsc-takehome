import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Spacer from "@/components/Spacer";

export type BenefitProps = {
  img: string | StaticImport,
  title: string,
  desc: string,
};

export default function Benefit({img, title, desc}: BenefitProps) {
  return <div>
    <div className="flex gap-[0.75rem]">
      <Image src={img} alt={title}/>
      <h3 className="h3 font-bold text-dark-blue">{title}</h3>
    </div>
    <Spacer rem={0.5} />
    <p className="p2 leading-[160%]">{desc}</p>
  </div>;
}
