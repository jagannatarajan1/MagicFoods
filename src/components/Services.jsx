import React from "react";
import heroIMg from "../assets/bannerImg.png";

const Services = () => {
  const services = [
    {
      title: "Wide Variety of Cuisines",
      description:
        "Explore a diverse menu featuring dishes from multiple cuisines to satisfy your cravings.",
    },
    {
      title: "Lightning-Fast Delivery",
      description:
        "Enjoy hot and fresh food delivered to your doorstep in no time.",
    },
    {
      title: "Easy-to-Use App",
      description:
        "Our intuitive platform makes ordering your favorite dishes a breeze.",
    },
    {
      title: "Customer Support",
      description:
        "24/7 support to ensure you have the best food ordering experience.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-yellow-500 text-4xl font-bold mb-8">
          Our Services
        </h1>
        <p className="text-lg mb-12">
          At <span className="text-yellow-500">MagicFoods</span>, we strive to
          provide a seamless and delightful food ordering experience. Here's
          what we offer:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className=" p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-yellow-500 font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="col justify-center align-middle ">
        <img
          src={heroIMg}
          className="w-80 lg:w-80 mt-9 mx-auto animate-spin-slow"
          alt="food item"
        />
      </div>
    </div>
  );
};

export default Services;
