const imgs = [
  { image: "/delivery.png", title: "Fast Delivery" },
  { image: "/shiled.svg", title: "Secure Payment" },
  { image: "/support.png", title: "Online Support" },
];
export default function Features({ horizontal }) {
  return (
    <div
      className={`flex ${horizontal == true ? "flex-row shadow-xl justify-between" : "flex-col"
        } justify-center`}
    >
      {imgs.map((curr) => {
        return (
          <button className="btn btn-xs sm:shadow-2xl flex flex-col items-center bg-[#dfdede] rounded-[8%] w-[6rem] sm:w-[9rem] h-[2rem] sm:h-[5rem] ">
            <img className="sm:w-[2rem] w-[1rem] flex " src={curr.image} />
            <p>{curr.title}</p>
          </button>
        );
      })}
    </div>
  );
}
