// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { Link } from "react-router-dom";

const ManageClasses = () => {
    const {data:courses=[]}=useQuery({
        queryKey:['courses'],
        queryFn: async()=>{
          const res = await fetch('http://localhost:5000/courses');
          return res.json()
        }
      })

      const handleApprove =(id)=>{
        axios.patch(`http://localhost:5000/courses/${id}`).then((res)=>{
            if(res.data.modifiedCount){
                alert('approved the course')
            }
        })
      }
      
    return (
        <div className="overflow-x-auto ">
        <table className="table min-w-full divide-y divide-white">
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
                Available Seats
              </th>
              <th className="px-6 py-3 text-[16px] text-white font-semibold">
                Instructor
              </th>
              <th className="px-6 py-3 text-[16px] text-white font-semibold">
                Price
              </th>
              <th className="px-6 py-3 text-[16px] text-white font-semibold">
                Status
              </th>
              <th className="px-6 py-3 text-[16px] text-white font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((selectedCourse, index) => {
              // const course = courses.find((c) => c._id === selectedCourse.courseId);
              return (
                <tr key={selectedCourse._id}>
                  <td className="px-6 py-4 text-white text-[13px]">
                    {index + 1}
                  </td>{" "}
                  {/* Serial number column */}
                  <td className="px-6 py-4">
                    <img
                      src={selectedCourse?.courseImage}
                      alt="Course"
                      className="h-16 w-16 object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 text-white text-[13px]">
                    {selectedCourse?.courseName}
                  </td>
                  <td className="px-6 py-4 text-white text-[13px]">
                    {selectedCourse?.availableSeats}
                  </td>
                  <td className="px-6 py-4 text-white text-[13px]">
                    <div>{selectedCourse?.instructorName}</div><br />
                    <div>{selectedCourse?.instructorEmail}</div>
                  </td>
                  <td className="px-6 py-4 text-white text-[13px] text-end">
                    ${selectedCourse?.price}
                  </td>
                  <td className="px-6 py-4 text-white text-[13px] text-end">
                    {selectedCourse?.status}
                  </td>
                  <td className="px-6 py-4 space-y-1 space-x-2">
                    
                      <button className={`${selectedCourse?.status=='approved'?'btn-disabled':'btn-pay btn-primary text-white rounded-sm font-semibold py-1 px-2'}`}
                      onClick={()=>handleApprove(selectedCourse?._id)}
                      >
                        approve
                      </button>
                   <br />
                    <button
                      className="btn-delete btn-primary text-white rounded-sm font-semibold py-1 px-2"
                    
                    >
                      Deny
                    </button>
                    <br />
                    <button
                      className="btn-delete btn-primary text-white rounded-sm font-semibold py-1 px-2"
                    
                    >
                      feedback
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
};

export default ManageClasses;