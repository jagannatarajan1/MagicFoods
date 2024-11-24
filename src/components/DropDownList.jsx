import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Shimmer from "./Shimmer";
import { MdStars } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
function DropDownList({ togglelistItem, TogglerFunction, visible, cart }) {
  const handleToggle = () => {
    TogglerFunction();
  };

  const dispatch = useDispatch();
  const AddDispatch = (item) => {
    dispatch(addItem(item));
  };
  const ToggleList = togglelistItem;
  console.log(ToggleList, visible);

  // if (ToggleList?.itemCards?.lenght < 0) return "";
  if (!cart) {
    if (!ToggleList?.itemCards || ToggleList.itemCards.length === 0) return "";
  }
  console.log("hhhuh");
  return !togglelistItem ? (
    <Shimmer />
  ) : (
    <>
      {!cart ? (
        <div
          className="bg-slate-50 rounded-sm h-11 flex items-center justify-between px-4 cursor-pointer"
          onClick={handleToggle}
        >
          <span className="text-black bg-white font-paraFont">
            {ToggleList?.title}{" "}
            {"(" + (ToggleList?.itemCards?.length || 0) + ")"}
          </span>

          <div className="text-black text-lg flex items-center ">
            {visible ? (
              <FaAngleUp className="bg-white" />
            ) : (
              <FaAngleDown className="bg-white" />
            )}
          </div>
        </div>
      ) : null}

      {visible && (
        <div className="bg-slate-50 rounded-sm px-4 ">
          <ul className="bg-slate-50 space-y-1 py-2">
            {(!cart ? ToggleList.itemCards : ToggleList).map((ele) => (
              <li key={ele?.card?.info?.id} className="bg-slate-50 pt-9">
                <div className="flex ">
                  <div className="bg-slate-50 w-3/4">
                    <p className="bg-slate-50 text-black font-paraFont lg:text-xl">
                      {ele?.card?.info?.name}
                    </p>
                    <p className="bg-slate-50 text-gray-800 font-paraFont">
                      {Math.round(ele?.card?.info?.defaultPrice / 100)} {"Rs"}
                    </p>
                    <div className="flex mt-1 bg-slate-50 text-green-600">
                      <span className=" mt-0.5 mr-1 text-lg bg-slate-50">
                        <MdStars className=" bg-slate-50" />
                      </span>
                      <p className=" font-paraFont   bg-slate-50">
                        {ele?.card?.info?.ratings?.aggregatedRating?.rating}
                      </p>
                    </div>
                    {/* <p className=" bg-slate-50 ">
                      {ele?.card?.info?.description < 120
                        ? ele?.card?.info?.description
                        : ele?.card?.info?.description.slice(0, 120) + "..."}
                      {ele?.card?.info?.description}
                    </p> */}
                  </div>
                  <div className="bg-slate-50">
                    <div
                      alt="Food Image"
                      style={{
                        backgroundImage: ele?.card?.info?.imageId
                          ? `url('https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${ele.card.info.imageId}')`
                          : "none",
                      }}
                      className="!bg-slate-50 h-32 w-44 md:h-48  md:w-60 px-7 rounded-3xl bg-cover bg-center grid place-items-center"
                    >
                      {!cart ? (
                        <button
                          className="font-paraFont text-white bg-black px-4 py-2 rounded"
                          onClick={() => AddDispatch(ele)}
                        >
                          Add +
                        </button>
                      ) : null}
                    </div>
                  </div>
                  {cart ? (
                    <div className="bg-white flex flex-row justify-center items-center">
                      <button
                        className=" rounded-md px-2.5 py-0.5 md:px-3 md:py-1 m-3 bg-primary text-black text-center "
                        onClick={() => AddDispatch(ele)}
                      >
                        +
                      </button>
                      <p className="font-paraFont text-black bg-white align-center">
                        {ele?.quantity}
                      </p>
                      <button
                        className=" rounded-md md:px-3 md:py-1 px-2.5 py-0.5 m-3 bg-primary text-black text-center "
                        onClick={() => dispatch(removeItem(ele))}
                      >
                        -
                      </button>
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default DropDownList;
