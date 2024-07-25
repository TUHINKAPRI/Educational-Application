import AnalysisCourse from "@/components/Home/AnalysisCourse";
import Hero from "@/components/Home/Hero";
import InstructorBody from "@/components/Home/InstructorBody";
import PopularTags from "@/components/Home/PopularTags";
import Tesimonials from "@/components/Home/Tesimonials";
import TopSellingCourseBox from "@/components/Home/TopSellingCourseBox";
import WhoCanJoin from "@/components/Home/WhoCanJoin";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

function Home() {
  return (
    <div className=" ">
      <Hero  className=""/>
      <AnalysisCourse />
      <WhyChooseUs />
      <WhoCanJoin/>
      {/* <PopularTags/> */}
      <InstructorBody/>
      <TopSellingCourseBox/>
      <Tesimonials/>
    </div>
  );
}

export default Home;
