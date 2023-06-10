import { FaArrowRight } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ClassesCard = ({ course }) => {
  const { user } = useAuth();
  const { data: selectedCourses = [], refetch } = useQuery({
    queryKey: ["selectedCourses"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/selectedcourse?email=${user?.email}`);
      return res.json();
    },
    enabled: !!user, // Fetch only when user is available
  });

  const { data: enrolledCourse = [] } = useQuery({
    queryKey: ["enrolledCourse"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/payments?email=${user?.email}`
      );
      return res.json();
    },
    enabled: !!user,
  });
  console.log(enrolledCourse);

  const handleSelect = (course) => {
    if (!user) {
      return alert("You have to log in!!");
    }

    const isCourseSelected = selectedCourses.some((selectedCourse) => {
      return (
        selectedCourse.courseId === course._id &&
        selectedCourse.email === user.email
      );
    });

    if (isCourseSelected) {
      return Swal.fire("You have already enrolled in this course.");
    }

    course.email = user.email;

    axios
      .post(`http://localhost:5000/selectedcourse`, course)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          icon: "success",
          title: "Course Selected",
          text: "You have successfully enrolled in the course.",
        }).then(() => {
          refetch(); // Trigger refetch after successful course selection
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "An error occurred while selecting the course",
          text: "Please try again.",
        });
      });
  };

  const isCourseSelected = selectedCourses.some((selectedCourse) => {
    return (
      selectedCourse.courseId === course._id &&
      selectedCourse.email === user?.email
    );
  });

  const isCourseEnrolled = enrolledCourse.some((selectedCourse) => {
    return (
      selectedCourse.courseId === course._id &&
      selectedCourse.email === user?.email
    );
  });

  return (
    <div
      className={`card bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-500 ${
        course.availableSeats === 0 ? "bg-red-500" : ""
      }`}
    >
      <figure className="h-1/2">
        <img
          src={course?.courseImage}
          alt="Course"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="card-title text-lg font-bold mb-2 text-[#65799b]">
            {course?.courseName}
          </h2>
          <p className="text-sm text-[#65799b] font-semibold">
            Instructor Name: {course?.instructorName}
          </p>
          <p className="text-sm text-[#65799b] font-semibold">
            Available Seats: {course?.availableSeats}
          </p>
          <p className="text-sm text-[#65799b] font-semibold">
            Enrolled Seats: {course?.enrolledStudents}
          </p>
          <p className="text-sm text-[#65799b] font-semibold">
            Price: {course?.price}
          </p>
        </div>
        <div className="card-actions justify-end">
          {course.availableSeats === 0 ? (
            <button className="btn btn-disabled bg-red-400 text-black mt-4" disabled>
              Enroll Now
              <FaArrowRight />
            </button>
          ) : isCourseSelected || isCourseEnrolled ? (
            <button className="btn btn-disabled bg-gray-400 text-black mt-4" disabled>
              {isCourseEnrolled?'Enrolled':'Selected'}
              <FaArrowRight />
            </button>
          ) : (
            <button className="btn btn-primary mt-4" onClick={() => handleSelect(course)}>
              Select Now
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
