export default function Registration() {
  return (
    <div className="bg-[#9c3030] w-[100vw] h-[100vh] flex justify-between">
      <div className=" ml-[12rem] pt-[12rem]">
        <h1 className="text-white font-bold text-[46px]">Welcome To ASHAM</h1>
        <p className="text-white font- text-[15px] items-center">
          Embrace The Beauty Of Culture Through Our Diverse
          <br /> Collection Of Cultural Materials
        </p>
      </div>
      <div className="bg-opacity-10 bg-white items-center w-[25rem]  mr-[12rem] mt-[3rem] mb-[3rem]">
        <form>
          <p className="text-black font-bold">Register</p>
          <div className="bg-white bg-opacity-10 flex">
            <img className="w-[1.2rem]" src="/PersonWhite.png" />
            <input
              className="bg-white bg-opacity-10"
              type="text"
              placeholder="First Name..."
            />
          </div>
        </form>
      </div>
    </div>
  );
}
