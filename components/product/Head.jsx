export default function Head({ description, curr }) {
  return (
    // <div>
    <div className="flex w-[60rem] h-[13rem] bg-[#f9ebeb] transition-all mr-[1rem] mt-[1rem] justify-center items-center ">
      <p className="font-bold text-[30px] px-[1rem] w-[25rem] items-start">
        {description}
      </p>
      <figure className="h-[20rem] pt-[35px] rounded">
        <img src={curr} className="h-48" alt="Shoes" />
      </figure>
    </div>
  );
}
