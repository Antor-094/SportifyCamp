/* eslint-disable react/no-unescaped-entities */


import { useQuery } from "@tanstack/react-query";


import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ClassesCard from "../../Components/card/ClassesCard";

const Classes = () => {
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
      <div className="">
      <SectionTitle
        heading="Popular Classes"
        subHeading="Popular classes based on the number of students"
        margin={true}
      ></SectionTitle>

      <div className="grid md:grid-cols-3 w-[80%]  mx-auto gap-8">
      {
        filteredCourses.map(course=><ClassesCard key={course._id} course={course}
            
        ></ClassesCard>)
      }
      </div>
    </div>
    </div>
  );
};

export default Classes;
