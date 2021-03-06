import React from "react";
import quote from "../../assets/icons/quote.svg";
import pepole1 from "../../assets/images/people1.png";
import pepole2 from "../../assets/images/people2.png";
import pepole3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review: "",
      location: "california",
      img: pepole1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      review: "",
      location: "california",
      img: pepole2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      review: "",
      location: "california",
      img: pepole3,
    },
  ];
  return (
    <section className="my-28 px-20">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-blod">Testimonials</h4>
          <h2 className="text-3xl">What Our Paients Say</h2>
        </div>
        <div>
          <img src={quote} className="w-28 lg:48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews?.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
