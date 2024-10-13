import Spacer from "@/components/Spacer";
import Button from "@/components/Button";

export default function WhyJoin() {
  return <div className="max-w-[36rem]">
    <h2 className="h2">Why join the Product Cohort?</h2>
    <Spacer rem={1.5} />
    <p className="p1 text-dark-blue font-bold">Because we turn your skills into tangible results!</p>
    <Spacer rem={1.25} />
    <p className="p2 leading-[1.6]">
      Do you want to take your development/design skills to the next level? Are you ready to collaborate with a startup and create a product that makes an impact? The UC Davis Google Developer Student Club’s Product Cohort is the opportunity you've been waiting for.
      <br/><br/>
      In this hands-on cohort, you won’t just learn—you’ll do. You will join a small, dynamic team tasked with building a functional website for an innovative startup. Together, you’ll experience the thrill and challenges of working in  a fast-paced, real-world environment.
    </p>
    <Spacer rem={2.5} />
    <Button text="View our projects" />
  </div>;
}
