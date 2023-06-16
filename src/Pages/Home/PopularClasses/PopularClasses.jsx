/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import ClassesCard from "../../../Components/card/ClassesCard";
import "./PopularClasses.css";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const {data:courses=[]}=useQuery({
    queryKey:['courses'],
    queryFn: async()=>{
      const res = await fetch('http://localhost:5000/courses');
      return res.json()
    }
  })
  const filteredCourses = courses.filter(course=>course.status=='approved')
  return (
    <div>
      <SectionTitle
        heading="Popular Classes"
        subHeading="Popular classes based on the number of students"
      ></SectionTitle>

      <div className="grid md:grid-cols-3 w-[80%] mx-auto gap-8">
      {
        filteredCourses.slice(0,6).map(course=><ClassesCard key={course._id} course={course}></ClassesCard>)
      }
      </div>
      <div className="flex justify-center mt-12">
     {
      filteredCourses?.length > 6 ? <Link to='/classes'> <button className="btn btn-primary btn-outline ">See more</button></Link>:<></>
     }
      </div>
    </div>
  );
};

export default PopularClasses;
