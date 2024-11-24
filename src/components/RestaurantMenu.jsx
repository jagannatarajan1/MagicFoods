// import React from "react";
import { useState } from "react";
import { MdStars } from "react-icons/md";
import { Link } from "react-router-dom";

const RestaurantMenu = ({ list, updateList, searchFucntion }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const formChangeFuntion = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(list);
  return (
    <div className="section ">
      <div className="container mx-auto mt-20 lg:px-24 ">
        <p className=" text-white font-paraFont lg:text-3xl text-xl pl-5 lg:pl-0 mt-16">
          Restaurants with online food delivery in Chennai
        </p>
        <div className="flex mt-6">
          <input
            type="text"
            onChange={formChangeFuntion}
            className="text-white border border-solid  border-white focus:border-black"
          />
          <button
            type="submit"
            className="button rounded-md text-black mx-2 bg-white  px-5 py-1"
            onClick={() => searchFucntion(searchTerm)}
          >
            Search
          </button>

          <button
            className="button rounded-md bg-primary text-black px-5 py-1 text-md font-paraFont"
            onClick={() => {
              if (typeof updateList === "function") {
                updateList(
                  list?.filter((item) => item?.info?.avgRating >= 4.5)
                );
              } else {
                console.error("updateList is not a function");
              }
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="grid sm:grid-cols-4 gap-y-40 mt-12 ">
          {list?.map((ele) => (
            <div key={ele?.info?.id}>
              <Link to={"/restaurants/" + ele?.info?.id}>
                <div className="mb-4 h-[170px] w-[250px] item hover:h-[165px] hover:w-[245px] hover:p-1">
                  <div>
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${ele?.info?.cloudinaryImageId}`}
                      alt={ele?.info?.name || "Image"}
                      className="mx-auto w-72 h-44 rounded-xl"
                    />
                  </div>
                  <div className="flex justify-center pt-2 flex-col">
                    <p className="text-white font-paraFont text-lg font-bold">
                      {ele?.info?.name?.length < 22
                        ? ele?.info?.name
                        : ele?.info?.name?.slice(0, 22) + "..."}
                    </p>
                    <div className="flex">
                      <span className="text-primary mt-0.5 mr-1 text-lg">
                        <MdStars />
                      </span>
                      <p className="text-white font-paraFont ">
                        {ele?.info?.avgRating} - {ele?.info?.sla?.slaString}
                      </p>
                    </div>
                    <p className="text-gray-300">
                      {ele?.info?.cuisines
                        .filter((ele, index) => index < 2)
                        .join(", ")}
                    </p>
                    <p className="text-gray-300">{ele?.info?.areaName}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
