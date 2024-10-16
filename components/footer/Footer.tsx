import Section from "@/components/Section";
import Columns from "@/components/Columns/Columns";
import Badge from "@/components/footer/Badge";
import Socials from "@/components/footer/Socials";
import Links from "@/components/footer/Links";

export default function Footer() {
  return <div className="footer">
    <Section>
      <Columns>
        <Badge />
        <Links />
        <Socials />
      </Columns>
    </Section>
  </div>;
}
