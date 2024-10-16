import Section from "@/components/Section";
import Columns from "@/components/Columns/Columns";
import Column from "@/components/Columns/Column";
import Benefits from "@/components/section3/Benefits";
import Image from "next/image";
import benefits1 from "@/public/benefits1.png";
import benefits2 from "@/public/benefits2.png";
import Spacer from "@/components/Spacer";

export default function Section3() {
  return <Section>
    <Columns>
      <Column>
        <div className="pr-[3.75rem]">
          <Image src={benefits1} alt="benefits 1" className="rounded-[0.5rem]" />
          <Spacer rem={1.25} />
          <Image src={benefits2} alt="benefits 2" className="rounded-[0.5rem]" />
        </div>
      </Column>
      <Column>
        <Benefits />
      </Column>
    </Columns>
  </Section>
}
