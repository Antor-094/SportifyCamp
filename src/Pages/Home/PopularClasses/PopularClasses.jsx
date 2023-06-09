/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import ClassesCard from "../../../Components/card/ClassesCard";
import "./PopularClasses.css";

const PopularClasses = () => {
  const {data:courses=[]}=useQuery({
    queryKey:['courses'],
    queryFn: async()=>{
      const res = await fetch('http://localhost:5000/courses');
      return res.json()
    }
  })
  return (
    <div>
      <SectionTitle
        heading="Popular Classes"
        subHeading="Popular classes based on the number of students"
      ></SectionTitle>

      <div className="grid md:grid-cols-3 w-[80%] mx-auto gap-8">
      {
        courses.map(course=><ClassesCard key={course._id} course={course}></ClassesCard>)
      }
      </div>
    </div>
  );
};

export default PopularClasses;
