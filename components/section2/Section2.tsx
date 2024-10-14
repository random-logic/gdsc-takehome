import Columns from "@/components/Columns/Columns";
import WhyJoin from "@/components/section2/WhyJoin";
import Image from 'next/image';
import diversity from "@/public/diversity.png";
import Column from "@/components/Columns/Column";
import Section from "@/components/Section";

export default function Section2() {
  return <Section>
    <Columns>
      <Column>
        <WhyJoin />
      </Column>
      <Column>
        <Image src={diversity} alt="diversity" className="pl-[2.75rem]"/>
      </Column>
    </Columns>
  </Section>;
}
