/* eslint-disable react/no-unescaped-entities */


const Card = ({image,name,email}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name : {name}</h2>
            <p>Email : {email}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Enroll Now</button>
            </div>
          </div>
        </div>
    );
};

export default Card;