/* eslint-disable react/no-unescaped-entities */
// import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import InstructorsCard from "../../../Components/card/InstructorsCard";




const PopularInstructors = () => {
  
  return (
    <div>
      <SectionTitle
        heading="Popular Instructors"
        subHeading="Popular classes based on the number of students enroll"
      ></SectionTitle>

      <div className="grid md:grid-cols-3 w-[80%] mx-auto gap-4">
        <InstructorsCard image={'https://i.ibb.co/8Y3r4mZ/kids-playing-basketball.jpg'} email={'antor@nadia.com'} name={'Basketball'}></InstructorsCard>
        
      </div>
    </div>
  );
};

export default PopularInstructors;
