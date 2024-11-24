import { useEffect, useState } from "react";
import heroIMg from "../assets/bannerImg.png";
import Carosel from "./Carosel";
import axios from "axios";
import { swiggyApi } from "../utils/constants";
import RestaurantMenu from "./RestaurantMenu";

const Body = () => {
  const [data, setdata] = useState([]);
  const [res, setRes] = useState([]);

  const carouselListData =
    data?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  const RestaurantList =
    res.length > 0
      ? res
      : data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
  const updatListFunction = (value) => {
    setRes(value);
    console.log(data);
  };
  const searchFucntion = (value) => {
    console.log(RestaurantList);
    const filteredData = RestaurantList.filter((item) =>
      item?.info?.name?.toLowerCase().includes(value.toLowerCase())
    );
    updatListFunction(filteredData);
    console.log(value);
  };

  console.log(updatListFunction);
  useEffect(() => {
    const getApi = async function () {
      try {
        const getData = await axios.get(swiggyApi);
        setdata(getData);
      } catch (error) {
        console.error(error);
      } finally {
        // cleanup code here
      }
    };
    getApi();
  }, []);
  return (
    <div className="w-full">
      <div className="section ">
        <div className="container  mt-20  lg:px-24 mx-auto   h-screen flex justify-center items-center  ">
          <div className="grid lg:grid-cols-3 gap-4 ">
            <div className=" col lg:col-span-2 ">
              <h1 className=" text-7xl md:text-8xl lg:text-9xl  font-headFont text-white">
                Perfectly Light In Every Bite
              </h1>
              <div className="hidden lg:flex lg:mt-20 ">
                <div className=" lg:w-36 lg:h-1 bg-primary mt-6"></div>
                <p className="text-white font-paraFont lg:text-xl">
                  We have a proper passion for cooking. Love is the secret
                  ingredient that makes all our meals taste better and magical.
                </p>
              </div>
            </div>
            <div className="col justify-center align-middle ">
              <img
                src={heroIMg}
                className="w-80 lg:w-full mx-auto animate-spin-slow"
                alt="food item"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section ">
        <div className="container mx-auto mt-5 mb-10 lg:px-24 ">
          <p className="text-white font-paraFont lg:text-3xl text-xl pl-5 lg:pl-0">
            What&apos;s on your mind?
          </p>

          <Carosel caroselData={carouselListData}></Carosel>
        </div>
      </div>
      <RestaurantMenu
        list={RestaurantList}
        updateList={updatListFunction}
        searchFucntion={searchFucntion}
      />
    </div>
  );
};

export default Body;
