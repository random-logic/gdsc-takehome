import Columns from "@/components/Columns/Columns";
import WhyJoin from "@/components/section2/WhyJoin";
import Image from 'next/image';
import diversity from "@/public/diversity.png";
import Column from "@/components/Columns/Column";

export default function Section2() {
  return <div className="px-edge">
    <div className="flex justify-center">
      <div className="content">
        <Columns>
          <Column>
            <WhyJoin />
          </Column>
          <Column>
            <div className="pl-[2.75rem]">
              <Image src={diversity} alt="diversity" className="object-contain"/>
            </div>
          </Column>
        </Columns>
      </div>
    </div>
  </div>;
}
