import ProgressBar from "react-customizable-progressbar";

function UserCard() {
  return (
    <div className="flex flex-col h-64 w-80 shadow bg-light-peach rounded-lg items-center justify-around hover:shadow-xl hover:translate-y-2.5">
      <span className="font-light tracking-widest">
        profile progress - 70%
      </span>
      <img
        src="https://images.unsplash.com/photo-1557130680-6a87a704ac0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        alt=""
        className="absolute rounded-full object-cover h-20 w-20"
      />
      <ProgressBar
        className="mt-8"
        progress={70}
        radius={50}
        strokeWidth={2}
        trackStrokeWidth={2}
        pointerRadius={4}     
        pointerStrokeWidth={2}
        pointerFillColor={"#F2E9E6"}
      />
      <span className="font-medium tracking-wide text-black">
        Siddharth M Karthikeyan
      </span>
      <span className="font-thin tracking-widest">job seeker</span>
    </div>
  );
}

export default UserCard;
