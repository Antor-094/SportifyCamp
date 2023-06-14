// import React from 'react';

const AddClassForm = ({ user, onSubmit, register, handleSubmit }) => {
  const { displayName, email } = user;

  
  return (
    <form className="flex flex-col items-center text-white" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col">
          <label htmlFor="courseName">Course Name</label>
          <input type="text" id="courseName" className="border rounded p-2" {...register('courseName', { required: true })} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="courseImage">Course Image</label>
          <input type="file" id="courseImage" className="border rounded p-2" {...register('courseImage', { required: true })} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="instructorName">Instructor Name</label>
          <input
            type="text"
            id="instructorName"
            value={displayName}
            readOnly
            className="border rounded p-2"
            {...register('instructorName')}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="instructorEmail">Instructor Email</label>
          <input
            type="email"
            id="instructorEmail"
            value={email}
            readOnly
            className="border rounded p-2"
            {...register('instructorEmail')}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="availableSeats">Available Seats</label>
          <input
            type="number"
            id="availableSeats"
            className="border rounded p-2"
            {...register('availableSeats', { required: true })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" className="border rounded p-2" {...register('price', { required: true, pattern: /^\d+(\.\d{1,2})?$/ })} />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-[500px] text-white px-4 py-2 rounded mt-4"
      >
        Add
      </button>
    </form>
  );
};

export default AddClassForm;
