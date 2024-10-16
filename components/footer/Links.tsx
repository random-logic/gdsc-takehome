import Spacer from "@/components/Spacer";

export default function Links() {
  return <div className="flex gap-[6.25rem]">
    <div>
      <p className="p text-grey font-bold leading-[150%] text-center text-[16px]">Links</p>
      <Spacer rem={0.5}/>
      <a href="/" className="p3 text-grey leading-[18px] text-center">About</a>
      <Spacer rem={0.5}/>
      <a href="/" className="p3 text-grey leading-[18px] text-center">Apply</a>
      <Spacer rem={0.5}/>
      <a href="/" className="p3 text-grey leading-[18px] text-center">Projects</a>
    </div>
    <div>
      <p className="p font-bold leading-[150%] text-center text-[16px]">Students</p>
      <Spacer rem={0.5}/>
      <a href="/" className="p3 text-grey leading-[18px] text-center">FAQ</a>
      <Spacer rem={0.5}/>
      <a href="/" className="p3 text-grey leading-[18px] text-center">Contact</a>
      <Spacer rem={0.5}/>
      <a href="/" className="p3 text-grey leading-[18px] text-center">Newsletter</a>
    </div>
  </div>;
}
