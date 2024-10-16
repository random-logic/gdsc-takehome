import SocialIcon from "@/components/footer/SocialIcon";
import Instagram from "@/public/Instagram.svg";
import Linkedin from "@/public/Linkedin.svg";
import Youtube from "@/public/Youtube.svg";
import Discord from "@/public/Discord.svg";
import TikTok from "@/public/TikTok.svg";

export default function Socials() {
  return <div className="flex gap-[1.5rem]">
    <SocialIcon href="https://www.instagram.com/gdsc_ucdavis/" src={Instagram} alt="Instagram"/>
    <SocialIcon href="https://www.linkedin.com/company/developer-student-club-uc-davis/" src={Linkedin} alt="Linkedin"/>
    <SocialIcon href="https://www.youtube.com/@googledeveloperstudentclub4852" src={Youtube} alt="Youtube"/>
    <SocialIcon href="https://discord.com/invite/xGtPE2dM" src={Discord} alt="Discord"/>
    <SocialIcon href="https://www.tiktok.com/@gdsc_ucdavis" src={TikTok} alt="TikTok"/>
  </div>;
}
