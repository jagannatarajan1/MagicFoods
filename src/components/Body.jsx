import heroIMg from "../assets/bannerImg.png";

const Body = () => {
  return (
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
  );
};

export default Body;
