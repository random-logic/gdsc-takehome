export default function Links() {
  return <div className="flex gap-[6.25rem]">
    <div className="flex flex-col items-center gap-[0.5rem]">
      <p className="p text-grey font-bold leading-[150%] text-center text-[16px]">Links</p>
      <a href="/" className="p3 text-grey leading-[18px] text-center">About</a>
      <a href="/" className="p3 text-grey leading-[18px] text-center">Apply</a>
      <a href="/" className="p3 text-grey leading-[18px] text-center">Projects</a>
    </div>
    <div className="flex flex-col items-center gap-[0.5rem]">
      <p className="p font-bold leading-[150%] text-center text-[16px]">Students</p>
      <a href="/" className="p3 text-grey leading-[18px] text-center">FAQ</a>
      <a href="/" className="p3 text-grey leading-[18px] text-center">Contact</a>
      <a href="/" className="p3 text-grey leading-[18px] text-center">Newsletter</a>
    </div>
  </div>;
}
