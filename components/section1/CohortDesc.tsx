import Spacer from "@/components/Spacer";
import Button from "@/components/Button";

export default function CohortDesc() {
  return <div className="lg:pr-[3.44rem]">
    <p className="p1 text-dark-blue font-bold leading-[120%]">Build Real-World Products with the</p>
    <h1 className="h1 font-extrabold leading-[120%]">UC Davis <br /> Product Cohort</h1>
    <Spacer rem={1.25} />
    <p className="p1 text-grey leading-[160%] font-medium">
      This cohort focuses on collaborating with real-world startups to deliver a fully-functional product,
      simulating the experience of working in a professional environment.
    </p>
    <Spacer rem={3.75} />
    <div className="flex items-start gap-[2.5rem]">
      <Button text="Join our cohort" emphasized />
      <Button text="Contact us" />
    </div>
  </div>;
}
