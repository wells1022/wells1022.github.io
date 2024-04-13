import HeroSection from "../ui/home/HeroSection";
import AboutMe from "../ui/home/AboutMe";
import WorkExperience from "../ui/home/WorkExperience";
import MySkills from "../ui/home/MySkills";
import Certifications from "../ui/home/Certifications";
import MyPortfolio from "../ui/home/MyPortfolio";
import Education from "../ui/home/Education";
// import ContactMe from "../ui/home/ContactMe";
import "../style/Home.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <WorkExperience />
      <MySkills />
      <Certifications />
      <MyPortfolio />
      <Education />
      {/* <ContactMe /> */}
    </>
  );
}
