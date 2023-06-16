// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

const ManageClasses = () => {
  const feedbackRef = useRef();
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const { data: courses = [],refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch("https://summer-camp-learning-school-server-olive.vercel.app/courses");
      return res.json();
    },
  });

  const handleApprove = (id) => {
    axios
      .patch(`https://summer-camp-learning-school-server-olive.vercel.app/courses/${id}?status=approved`)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position:'top-end',
            icon:'success',
            title:'Course Approved successfully',
            
          })
          refetch();
        }
      });
  };
  const handleDeny = (id) => {
    axios
      .patch(`https://summer-camp-learning-school-server-olive.vercel.app/courses/${id}?status=deny`)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position:'top-end',
            title:'Course denied successfully',
            
          })
          refetch();
        }
      });
  };
  const handleFeedBack = (id) => {
    axios
      .patch(`https://summer-camp-learning-school-server-olive.vercel.app/courses/${id}?feedback=${feedbackRef?.current?.value}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position:'top-end',
            icon:'success',
            title:' Feedback sent successfully',
            
          })
          refetch();
        }
      });
  };
  console.log(feedbackRef?.current?.value)
  return (
    <div>
      <Helmet>
        <title>SportifyCamp | ManageClasses</title>
      </Helmet>
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
                  <div>{selectedCourse?.instructorName}</div>
                  <br />
                  <div>{selectedCourse?.instructorEmail}</div>
                </td>
                <td className="px-6 py-4 text-white text-[13px] text-end">
                  ${selectedCourse?.price}
                </td>
                <td className="px-6 py-4 text-white text-[13px] text-end">
                  {selectedCourse?.status}
                </td>
                <td className="px-6 py-4 space-y-1 space-x-2">
                  <button
                    className={`${
                      selectedCourse?.status == "deny" ||
                      selectedCourse?.status == "approved"
                        ? "btn-disabled"
                        : "btn-pay btn-primary text-white rounded-sm font-semibold py-1 px-2"
                    }`}
                    onClick={() => handleApprove(selectedCourse?._id)}
                  >
                    approve
                  </button>
                  <br />
                  <button
                    className={`${
                      selectedCourse?.status == "deny" ||
                      selectedCourse?.status == "approved"
                        ? "btn-disabled"
                        : "btn-pay btn-primary text-white rounded-sm font-semibold py-1 px-2"
                    }`}
                    onClick={() => handleDeny(selectedCourse?._id)}
                  >
                    Deny
                  </button>
                  <br />
                  
                 <button
                    onClick={() => {
                      setSelectedCourseId(selectedCourse?._id);
                      window.my_modal_5.showModal();
                    }}
                    className="btn btn-accent btn-outline btn-xs border-0"
                  >
                    Feedback
                  </button>
                </td>
              </tr>
            );
          })}
         <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle bg-white"
        >
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg text-center mb-4">
              Give Feedback
            </h3>
            <textarea
              ref={feedbackRef}
              className="textarea w-full"
              placeholder="Write feedback"
            ></textarea>
            <div className="modal-action">
              {/* if there is a button in the form, it will close the modal */}
              <button className="btn btn-primary btn-outline btn-xs">
                Close
              </button>
              <button
                onClick={() =>
                  handleFeedBack(selectedCourseId)
                }
                className="btn btn-primary btn-outline btn-xs"
              >
                Send
              </button>
            </div>
          </form>
        </dialog>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageClasses;
