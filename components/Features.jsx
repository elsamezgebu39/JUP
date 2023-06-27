const imgs = [
  { image: "/delivery.png", title: "Fast Delivery" },
  { image: "/shiled.svg", title: "Secure Payment" },
  { image: "/support.png", title: "Online Support" },
];
export default function Features({ horizontal }) {
  return (
    <div
      className={`flex ${
        horizontal == true ? "flex-row shadow-2xl" : "flex-col"
      } justify-center m-[1rem]`}
    >
      {imgs.map((curr) => {
        return (
          <div className="shadow-2xl m-[1rem] flex flex-col  items-center bg-[#f0eded] rounded-[5%] w-[9rem] h-[5rem] ">
            <img className="w-[2rem] flex  " src={curr.image} />
            <p>{curr.title}</p>
          </div>
        );
      })}
    </div>
  );
}
