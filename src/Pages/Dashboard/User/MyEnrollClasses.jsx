// import { useQuery } from "react-query";
// import axios from "axios";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyEnrollClasses = () => {

const { user } = useAuth();
  const { data: enrollClasses = [] } = useQuery({
    queryKey: ["enrollClasses"],
    queryFn: async () => {
      const res = await fetch(`https://summer-camp-learning-school-server-olive.vercel.app/payments?email=${user?.email}`);
      return res.json();
    },
   
  });
    
console.log(enrollClasses)
  return (
    <div>
      <Helmet>
        <title>SportifyCamp | EnrollClasses</title>
      </Helmet>
      <SectionTitle heading={'Enroll Classes'}></SectionTitle>
      <div className="overflow-x-auto">
      <table className="table min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-[16px] text-white font-semibold">
              SNo
            </th>
            <th className="px-6 py-3 text-[16px] text-white font-semibold">
              Course Image
            </th>
            <th className="px-6 py-3 text-[16px] text-white font-semibold">
              Course Name
            </th>
            <th className="px-6 py-3 text-[16px] text-white font-semibold">
              Instructor Name
            </th>
            <th className="px-6 py-3 text-[16px] text-white font-semibold">
              Price
            </th>
            
          </tr>
        </thead>
        <tbody>
          {enrollClasses.map((enrollClasse, index) => {
            // const course = courses.find((c) => c._id === selectedCourse.courseId);
            return (
              <tr key={enrollClasse._id}>
                <td className="px-6 py-4 text-white text-[13px]">
                  {index + 1}
                </td>{" "}
                {/* Serial number column */}
                <td className="px-6 py-4">
                  <img
                    src={enrollClasse?.courseImage}
                    alt="Course"
                    className="h-16 w-16 object-cover"
                  />
                </td>
                <td className="px-6 py-4 text-white text-[13px]">
                  {enrollClasse?.courseName}
                </td>
                <td className="px-6 py-4 text-white text-[13px]">
                  {enrollClasse?.instructorName}
                </td>
                <td className="px-6 py-4 text-white text-[13px] text-end">
                  ${enrollClasse?.price}
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default MyEnrollClasses;
