const InstructorsCard = ({ image, name, email }) => {
    return (
      <div className="card w-[100%] bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition duration-500">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Email: {email}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Enroll Now</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default InstructorsCard;
  