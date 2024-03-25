import HeroSection from "../ui/home/HeroSection";
import AboutMe from "../ui/home/AboutMe";
import WorkExperience from "../ui/home/WorkExperience";
import MySkills from "../ui/home/MySkills";
import MyPortfolio from "../ui/home/MyPortfolio";
import Certifications from "../ui/home/Certifications";
import ContactMe from "../ui/home/ContactMe";
import "../style/Home.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <WorkExperience />
      <MySkills />
      <MyPortfolio />
      {/* <Certifications /> */}
      {/* <ContactMe /> */}
    </>
  );
}
