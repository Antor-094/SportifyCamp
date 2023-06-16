// import React from 'react';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import AddClassForm from './AddClassForm';
import { useForm } from 'react-hook-form';
const img_hosting_token = import.meta.env.VITE_imgbb;
const AddClass = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.courseImage[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData
     
    }).then((res) => res.json())
    .then((imgResponse)=>{
      if(imgResponse.success){
        data.courseImage=imgResponse.data.display_url;
        data.availableSeats=parseFloat(data.availableSeats)
        data.enrollStudents=0
        data.status='pending'
        axios.post('https://summer-camp-learning-school-server-olive.vercel.app/courses',data).then(res=>console.log(res.data))
      }
    })

    
  };

  return (
    <div className="text-white">
      <AddClassForm user={user} onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddClass;
