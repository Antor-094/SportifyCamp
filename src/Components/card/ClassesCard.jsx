import { FaArrowRight } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import { motion } from "framer-motion";

const ClassesCard = ({ course}) => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure(); // Use the custom axios instance
  const [isAdmin]= useAdmin()
  const [isInstructor] = useInstructor()

  const { data: selectedCourses = [], refetch } = useQuery({
    queryKey: ["selectedCourses"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedcourse?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user, 
  });

  const { data: enrolledCourse = [] } = useQuery({
    queryKey: ["enrolledCourse"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user,
  });
  // console.log(enrolledCourse);

  const handleSelect = (course) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Login Required",
        text: "You have to log in!!",
      });
      return;
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
      .post(`https://summer-camp-learning-school-server-olive.vercel.app/selectedcourse`, course)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          icon: "success",
          title: "Course Selected",
          text: "You have successfully enrolled in the course.",
        }).then(() => {
          refetch();
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
// console.log(course.availableSeats)
  return (
    <motion.div className={`max-w-md p-2 shadow-md rounded-lg overflow-hidden hover:shadow-2xl  transform  ${
      course.availableSeats === 0 ? "bg-red-600" : "bg-base-100 "
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{duration:0.6}}
    >
    
    <img src={course?.courseImage} alt="Card" className="w-full h-64 md:h-72 object-cover" />
    <div className="p-4">
    <p className="text-xl text-[#65799b] font-semibold">{course?.courseName}</p>
    <p className="text-sm text-[#65799b] font-semibold">Instructor Name: {course?.instructorName}</p>
    <p className="text-sm text-[#65799b] font-semibold">Available Seats: {course?.availableSeats}</p>
    <p className="text-sm text-[#65799b] font-semibold">Enroll Students: {course?.enrollStudents}</p>
    <p className="text-sm text-[#65799b] font-semibold">Price: {course?.price}</p>
    <div className="card-actions mt-4 flex justify-end">
      {course.availableSeats === 0 ? (
        <button className="btn btn-disabled bg-red-400 text-black" disabled>
          Enroll Now <FaArrowRight className="ml-1" />
        </button>
      ) : isCourseSelected || isCourseEnrolled || isAdmin || isInstructor ? (
        <button className="btn btn-disabled bg-gray-400 text-black opacity-[0.3]">
          {isCourseEnrolled ? 'Enrolled' : ''} <FaArrowRight className="ml-1" />
        </button>
      ) : (
        <button className="btn btn-primary" onClick={() => handleSelect(course)}>
          Select Now <FaArrowRight className="ml-1" />
        </button>
      )}
    </div>
    </div>
  </motion.div>





  );
};

export default ClassesCard;
