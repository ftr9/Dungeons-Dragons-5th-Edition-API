import { IoMdHeart } from 'react-icons/io';
const SpellCard = () => {
  return (
    <div className=" border-white border-[0.5px] p-3 rounded-sm hover:cursor-pointer hover:bg-[#efd48b39] hover:border-transparent">
      <div className="flex justify-between  items-center">
        <div>
          <h1 className="text-[18px] font-bold">Acid Arrow</h1>
          <div className="bg-secondary text-black py-[1.5px] rounded-full px-2 justify-items-start text-xs inline-block">
            Level 1
          </div>
        </div>
        <div className="w-10 h-10 bg-white rounded-full text-[18px] flex justify-center items-center">
          <IoMdHeart className=" text-md text-black" />
        </div>
      </div>
      <div className="text-sm mt-5">see details</div>
    </div>
  );
};

export default SpellCard;
