import anime from "../../assets/images/animated.gif";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* <span className="loading loading-dots loading-lg"></span> */}
      <img src={anime} alt="" className="w-1/2" />
    </div>
  );
};

export default Loading;
