import Section from "@/components/Section";
import Columns from "@/components/Columns/Columns";
import Column from "@/components/Columns/Column";
import Image from "next/image";
import cohort from "@/public/cohort.png";
import CohortDesc from "@/components/section1/CohortDesc";

export default function Section1() {
  return <Section>
    <Columns>
      <Column>
        <CohortDesc />
      </Column>
      <Column>
        <Image src={cohort} alt="cohort" className="aspect-square object-cover rounded-[0.5rem]" />
      </Column>
    </Columns>
  </Section>;
}
