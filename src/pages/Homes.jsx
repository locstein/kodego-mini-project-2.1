import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";

const Homes = () => {
  return (
    <>
      <div className=" flex-1 mx-auto bg-[#fbf3f0] h-screen shadow-lg">
        <div className="text-black">
          <div className="text-4xl font-semibold shadow-lg px-3 py-2 flex justify-between items-center">
            Home
            <div className="cursor-pointer text-black">
              <AiOutlineSearch size={25} />
            </div>
          </div>
        </div>

        <div className="padding h-[16rem] w-[16rem] bg-red-300">Movies</div>
        <div className="padding">TvShows</div>
        <div className="padding bg-slate-300 w-[45] h-[45]">Footer</div>
      </div>
    </>
  );
};

export default Homes;
