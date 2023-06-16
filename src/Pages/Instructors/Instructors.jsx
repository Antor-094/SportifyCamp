// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import InstructorsCard from "../../Components/card/InstructorsCard";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const {data:users=[]}=useQuery({
        queryKey:['users'],
        queryFn: async()=>{
          const res = await fetch('https://summer-camp-learning-school-server-olive.vercel.app/users');
          return res.json()
        }
      })
      const filteredUsers = users.filter(user=>user.role=='instructor')
    
    
    return (
      <div>
        <Helmet>
        <title>SportifyCamp | Instructors</title>
      </Helmet>
        <SectionTitle
          heading="Instructors"
          // subHeading="Popular classes based on the number of students enroll"
        ></SectionTitle>
  
        <div className="grid md:grid-cols-3 w-[80%] mx-auto gap-4">
          {/* <InstructorsCard image={'https://i.ibb.co/8Y3r4mZ/kids-playing-basketball.jpg'} email={'antor@nadia.com'} name={'Basketball'}></InstructorsCard> */}
  
          {
            filteredUsers.map(instructor=><InstructorsCard
            key={instructor._id} instructor={instructor}></InstructorsCard>)
          }
          
        </div>
        
      </div>
    );
};

export default Instructors;