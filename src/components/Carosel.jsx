// import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carosel = ({ caroselData }) => {
  if (!caroselData || caroselData.length === 0)
    return <p>No items to display</p>;
  console.log(caroselData);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-autp mx-auto ">
      <div className="mt-10">
        <Slider {...settings}>
          {caroselData.map((ele) => (
            <div key={ele.info.id} className="mb-4 h-[190px] w-[300px] item ">
              <div>
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${ele.info.cloudinaryImageId}`}
                  alt={ele.info.name}
                  className="mx-auto w-72 h-52 rounded-xl"
                />
              </div>
              <div className="flex justify-center items-center pt-2">
                <p className="text-white font-paraFont ">{ele.info.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carosel;
