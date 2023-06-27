export default function Card({ title, description, price, curr }) {
  return (
    <div className="card w-[15rem] h-[25rem] bg-base-100 shadow-xl hover:shadow-2xl transition-all ml-[1rem] mr-[1rem] mt-[1rem] ">
      <figure className="h-[20rem] pt-[35px]">
        <img src={curr} className="h-48" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#621E23]">{title}!</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
