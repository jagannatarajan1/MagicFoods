import axios from "axios";
import { useEffect, useState } from "react";
import { MdStars } from "react-icons/md";
import DropDownList from "./DropDownList";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { restaurantPageApi } from "../utils/constants";

const RestaurantItem = () => {
  const [RestaurantDetails, setRestaurantDetails] = useState([]);
  const [isTextVisible, setIsTextVisible] = useState(0);
  const { resId } = useParams();

  useEffect(() => {
    const fetchfunction = async () => {
      try {
        const fetchData = await axios.get(restaurantPageApi + resId);
        setRestaurantDetails(fetchData);
      } catch (error) {
        console.error(error);
      } finally {
        // cleanup code here
      }
    };
    fetchfunction();
  }, []);
  const restaurant = RestaurantDetails?.data?.data?.cards[2];

  const allItems =
    RestaurantDetails?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards;
  console.log(allItems);

  return RestaurantDetails.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="section container  mx-auto mt-20 lg:px-80 px-6">
      <div className="container  ">
        <h1 className="text-white mt-24  font-paraFont text-xl ">
          {restaurant?.card?.card?.info?.name}
        </h1>
        <div className="flex mt-4">
          <span className="text-primary mt-0.5 mr-1 text-lg">
            <MdStars />
          </span>
          <p className="text-white font-paraFont ">
            {restaurant?.card?.card?.info?.totalRatingsString} -{" "}
            {restaurant?.card?.card?.info?.costForTwoMessage}
          </p>
        </div>
        <div className="text-white  font-paraFont text-sm ">
          <p>Outlet - {restaurant?.card?.card?.info?.locality}</p>
          <p className="text-sm">
            {restaurant?.card?.card?.info?.sla?.slaString}
          </p>
        </div>
      </div>
      <div className="container mt-20 ">
        {allItems.map((item, index) => (
          <DropDownList
            key={index}
            togglelistItem={item?.card?.card}
            TogglerFunction={() => setIsTextVisible(index)}
            visible={index === isTextVisible ? true : false}
          ></DropDownList>
        ))}
      </div>
    </div>
  );
};

export default RestaurantItem;
