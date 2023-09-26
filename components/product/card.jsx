export default function PCard({ title, description, price, curr }) {
  return (
    <div className="card w-[13rem] h-[20rem] bg-base-100 shadow-xl hover:shadow-2xl transition-all ml-[1rem] mr-[1rem] mt-[1rem] ">
      <figure className="h-[20rem] pt-[32px]">
        <img src={curr} className="h-40" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-[#621E23]">{title}!</h2>
        <p className="justify-end font-semibold ml-[4.5rem]">Birr {price}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-xs sm:btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
