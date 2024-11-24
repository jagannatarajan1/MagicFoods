import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-yellow-500 text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-relaxed">
          Welcome to <span className="text-yellow-500">MagicFoods</span>, your
          ultimate destination for delicious and convenient food ordering. Our
          mission is to bring your favorite dishes from the best restaurants
          straight to your doorstep, making your dining experience magical and
          hassle-free.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          At MagicFoods, we believe food is more than just sustenance—it's about
          connection, comfort, and joy. Our dedicated team works tirelessly to
          ensure you have access to a wide variety of cuisines, lightning-fast
          delivery, and an easy-to-use platform. We’re here to satisfy your
          cravings and exceed your expectations every time.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Join us on this flavorful journey and make every meal memorable with{" "}
          <span className="text-yellow-500">MagicFoods</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
