import Navbar from "@/components/navbar/Navbar";
import Spacer from "@/components/Spacer";
import Section2 from "@/components/section2/Section2";
import Section1 from "@/components/section1/Section1";
import Section3 from "@/components/section3/Section3";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return <>
    <Navbar />
    <Spacer rem={1.25} />
    <Section1 />
    <Spacer rem={8.75} />
    <Section2 />
    <Spacer rem={8.75} />
    <Section3 />
    <Spacer rem={8.75} />
    <Footer />
  </>;
}
