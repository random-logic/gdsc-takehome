import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

export type SocialIconProps = {
  src: string | StaticImport,
  alt: string,
  href: string,
}

export default function SocialIcon({src, alt, href}: SocialIconProps) {
  return <a href={href} className="pb-[0.4375rem]">
    <Image src={src} alt={alt} />
  </a>
}
