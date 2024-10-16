import Spacer from "@/components/Spacer";
import Benefit from "@/components/section3/Benefit";
import HandsOn from "@/public/hands-on-experience-icon.svg";
import Mentorship from "@/public/mentorship-logo.svg";
import Professional from "@/public/professional-network-logo.svg";
import Button from "@/components/Button";

export default function Benefits() {
  return <div>
    <h2 className="h2 font-bold">Benefits of the Product Cohort</h2>
    <Spacer rem={2.5}/>
    <Benefit img={HandsOn} title="Hands-on Experience"
             desc="This cohort gives you the chance to work in a real-world scenario with real deadlines, clients, and deliverables. By the end of the project, you’ll have a fully developed website to showcase in your portfolio."/>
    <Spacer rem={2.5}/>
    <Benefit img={Mentorship} title="Mentorship That Matters"
             desc="With guidance from experienced product managers who know the ins and outs of launching professional websites, you’ll navigate through the complexities of client communication and team dynamics."/>
    <Spacer rem={2.5}/>
    <Benefit img={Professional} title="A Professional Network"
             desc="Working with a startup means you’re not just gaining experience—you’re building relationships. The connections you make in our cohort could open doors to internships or even startup ventures of your own."/>
    <Spacer rem={3.75}/>
    <div className="flex items-start gap-[2.5rem]">
      <Button text="Join our cohort" emphasized/>
      <Button text="Contact us"/>
    </div>
  </div>;
}
