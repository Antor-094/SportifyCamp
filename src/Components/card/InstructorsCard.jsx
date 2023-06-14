const InstructorsCard = ({ instructor }) => {
  // console.log(instructor);
  return (
    // <div className="card w-[100%] bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-500">
    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-500">
    <figure className=""><img className="object-contain h-[300px]" src={instructor.image} alt="Instructors" /></figure>
    <div className="card-body">
      <h2 className="card-title">Name : {instructor.name}</h2>
      <p>Email : {instructor.email}</p>
      
    </div>
  </div>
  );
};

export default InstructorsCard;
