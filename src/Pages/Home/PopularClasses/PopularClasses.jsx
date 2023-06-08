/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./PopularClasses.css";

const PopularClasses = () => {
  return (
    <div>
      <SectionTitle
        heading="Popular Classes"
        subHeading="Popular classes based on the number of students"
      ></SectionTitle>

      <div className="grid md:grid-cols-3 w-[70%] mx-auto gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/YLXHbJt/Cricket-Going-Out.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cricket</h2>
            <p>Unleash your cricketing potential and master the gentleman's game.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Enroll Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/YLXHbJt/Cricket-Going-Out.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cricket</h2>
            <p>Unleash your cricketing potential and master the gentleman's game.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Enroll Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/YLXHbJt/Cricket-Going-Out.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cricket</h2>
            <p>Unleash your cricketing potential and master the gentleman's game.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Enroll Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/YLXHbJt/Cricket-Going-Out.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cricket</h2>
            <p>Unleash your cricketing potential and master the gentleman's game.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Enroll Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/YLXHbJt/Cricket-Going-Out.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cricket</h2>
            <p>Unleash your cricketing potential and master the gentleman's game.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Enroll Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/YLXHbJt/Cricket-Going-Out.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cricket</h2>
            <p>Unleash your cricketing potential and master the gentleman's game.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
