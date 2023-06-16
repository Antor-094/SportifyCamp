import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const SelectedClass = () => {
  const { user } = useAuth();

  // const token = localStorage.getItem('access-token')
  const [axiosSecure]=useAxiosSecure()
  const { data: selectedCourses = [], refetch } = useQuery({
    queryKey: ["selectedCourses"],
    queryFn: async () => {
      const res = await axiosSecure(
        `/selectedcourse?email=${user?.email}`
      )
      console.log('res from axios',res)
      return res.data;
    },
    enabled: !!user, // Fetch only when user is available
  });
  console.log(selectedCourses);
 

  const handleDelete = async (course) => {
    try {
      await axios.delete(`https://summer-camp-learning-school-server-olive.vercel.app/selectedcourse/${course._id}`);
      Swal.fire({
        icon: "success",
        title: "Course Deleted",
        text: "You have successfully deleted the course.",
      }).then(() => {
        refetch(); // Trigger refetch after successful deletion
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "An error occurred while deleting the course",
        text: "Please try again.",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>SportifyCamp | SectedClasses</title>
      </Helmet>
      <SectionTitle heading='Selected Classes'></SectionTitle>
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
            <th className="px-6 py-3 text-[16px] text-white font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedCourses.map((selectedCourse, index) => {
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
                  {selectedCourse?.instructorName}
                </td>
                <td className="px-6 py-4 text-white text-[13px] text-end">
                  ${selectedCourse?.price}
                </td>
                <td className="px-6 py-4 space-x-2">
                  <Link to={`/dashboard/payments/${selectedCourse.courseId}`}>
                    <button className="btn-pay btn-primary text-white rounded-sm font-semibold py-1 px-2">
                      Pay
                    </button>
                  </Link>
                  <button
                    className="btn-delete btn-primary text-white rounded-sm font-semibold py-1 px-2"
                    onClick={() => handleDelete(selectedCourse)}
                  >
                    Delete
                  </button>
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

export default SelectedClass;
