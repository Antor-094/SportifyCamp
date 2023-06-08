/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Card from "../../../Components/card/Card";
import "./PopularClasses.css";

const PopularClasses = () => {
  return (
    <div>
      <SectionTitle
        heading="Popular Classes"
        subHeading="Popular classes based on the number of students"
      ></SectionTitle>

      <div className="grid md:grid-cols-3 w-[70%] mx-auto gap-4">
      <Card image={'https://i.ibb.co/8Y3r4mZ/kids-playing-basketball.jpg'} email={'antor@nadia.com'} name={'Basketball'}></Card>
      </div>
    </div>
  );
};

export default PopularClasses;
