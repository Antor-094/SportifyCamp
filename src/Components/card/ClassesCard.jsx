import { FaArrowRight } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const ClassesCard = ({ course }) => {
  const {user}= useAuth()
  const handleSelect=()=>{
    if(!user){
      return alert('you have to log in!!')
    }
  }
  return (
    <div className={`card  bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-500 ${course.availableSeats === 0 ? 'bg-red-500' : ''}`}>
      <figure className="h-1/2">
        <img
          src={course?.courseImage}
          alt="Course"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="card-title text-lg font-bold mb-2 text-[#65799b]">{course?.courseName}</h2>
          <p className="text-sm text-[#65799b] font-semibold">Instructor Name: {course?.instructorName}</p>
          <p className="text-sm text-[#65799b] font-semibold">Available Seats: {course?.availableSeats}</p>
          <p className="text-sm text-[#65799b] font-semibold">Available Seats: {course?.enrolledStudents}</p>
          <p className="text-sm text-[#65799b] font-semibold">Price: {course?.price}</p>
        </div>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary mt-4" 
          onClick={handleSelect}>Enroll Now
          <FaArrowRight></FaArrowRight>
          </button> */}
          {
            (course.availableSeats==0)?<>
            <button className="btn btn-disabled bg-red-400 text-black mt-4" 
          onClick={handleSelect}>Enroll Now
          <FaArrowRight></FaArrowRight>
          </button>
            </>:<><button className="btn btn-primary mt-4" 
            onClick={handleSelect}>Enroll Now
            <FaArrowRight></FaArrowRight>
            </button></>
          }
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
