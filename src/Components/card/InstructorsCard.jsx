const InstructorsCard = ({ instructor }) => {
  // console.log(instructor);
  // console.log(instructor.photo)
  return (

    <div className="max-w-md mx-auto bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-500  rounded-md ">
      <img src={instructor.photo} alt="Card" className="w-full p-4 h-72 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-[#65799b]">{instructor.name}</h2>
        <h2 className="text-xl font-semibold mb-2 text-[#65799b]">{instructor.email}</h2>
        <p className=" mb-4 text-[#65799b]">this is a very good insrtuc jj.ehuinjuhibji dshbkjh  jhdbdjhbcijs hcjihbcijd</p>
        
      </div>
    </div>
    // <div className="card w-[100%] bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-500">
  //   <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-500">
  //   <figure className=""><img className="object-contain h-[300px]" src={instructor.photo} alt="Instructors" /></figure>
  //   <div className="card-body">
  //     <h2 className="card-title">Name : {instructor.name}</h2>
  //     <p>Email : {instructor.email}</p>
      
  //   </div>
  // </div>
  );
};

export default InstructorsCard;
