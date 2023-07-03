export default function AboutUs({ description, name, type, src, curr }) {
  return (
    <div className="card w-[15rem] bg-base-100 shadow-xl hover:shadow-2xl transition-all ml-[1rem] mr-[1rem] mt-[1rem] flex flex-col items-center justify-center">
      <figure className="rounded-full  h-[100px] w-[100px]">
        <img
          className="object-cover h-[100px] w-[100px]"
          src={curr}
          alt="Person"
        />
      </figure>
      <div className="card-body">
        <p className="">{description}</p>
        <h1 className="text-[#912c2c] text-center font-bold">{name}</h1>
        <p className="text-center">{type}</p>
      </div>
    </div>
  );
}
