// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
// import { useRef, useState } from "react";
// import axios from "axios";

const MyClasses = () => {
    const {user} = useAuth()


    const { data: myClasses = [],refetch} = useQuery({
        queryKey: ["myClasses"],
        queryFn: async () => {
          const res = await fetch(`https://summer-camp-learning-school-server-olive.vercel.app/instructorsCourses/${user?.email}`);
        
          return res.json();
          
        }, 
       
        
      });
      refetch();
      
     
    return (
        <div>
          <Helmet>
        <title>SportifyCamp | MyClasses</title>
      </Helmet>
        <SectionTitle  heading={'Classes'}></SectionTitle>
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
                Price
              </th>
              <th className="px-6 py-3 text-[16px] text-white font-semibold">
                enrollStudents
              </th>
              <th className="px-6 py-3 text-[16px] text-white font-semibold">
              status
              </th>
              <th className="px-6 py-3 text-[16px] text-white font-semibold">
              Feedback
              </th>
              <th className="px-6 py-3 text-[16px] text-white font-semibold">
              Update
              </th>
              
            </tr>
          </thead>
          <tbody>
            {myClasses.map((enrollClasse, index) => {
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
                  
                  <td className="px-6 py-4 text-white text-[13px] text-end">
                    ${enrollClasse?.price}
                  </td>
                  <td className="px-6 py-4 text-white text-[13px] text-end">
                    ${enrollClasse?.enrollStudents}
                  </td>
                  <td className="px-6 py-4 text-white text-[13px] text-end">
                    {enrollClasse?.status}
                  </td>
                  <td className="px-6 py-4 text-white text-[13px] text-end">
                    {/* <button className="btn btn-outline">FeedBack</button> */}
                    <textarea readOnly className="bg-black p-2 rounded-md" value={enrollClasse?.status=='deny'?enrollClasse?.feedback: ''}></textarea>
                  </td>
                  <td className="px-6 py-4 text-white text-[13px] text-end">
                    <button className="btn btn-outline">Update</button>
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

export default MyClasses;