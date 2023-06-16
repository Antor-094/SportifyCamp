/* eslint-disable react/no-unescaped-entities */
// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import InstructorsCard from "../../../Components/card/InstructorsCard";
import { Link } from "react-router-dom";




const PopularInstructors = () => {

  
    const {data:users=[]}=useQuery({
      queryKey:['users'],
      queryFn: async()=>{
        const res = await fetch('http://localhost:5000/users');
        return res.json()
      }
    })
    const filteredUsers = users.filter(user=>user.role=='instructor')
  
  
  return (
    <div>
      <SectionTitle
        heading="Popular Instructors"
        subHeading="Popular classes based on the number of students enroll"
      ></SectionTitle>

      <div className="grid md:grid-cols-3 w-[85%] md:w-[70%] mx-auto gap-6">
        {/* <InstructorsCard image={'https://i.ibb.co/8Y3r4mZ/kids-playing-basketball.jpg'} email={'antor@nadia.com'} name={'Basketball'}></InstructorsCard> */}

        {
          filteredUsers.slice(0,6).map(instructor=><InstructorsCard
          key={instructor._id} instructor={instructor}></InstructorsCard>)
        }
        
      </div>
      <div className="flex justify-center mt-12">
     {
      filteredUsers?.length > 6 ? <Link to='/instructors'> <button className="btn btn-primary btn-outline ">See more</button></Link>:<></>
     }
      </div>
    </div>
  );
};

export default PopularInstructors;
