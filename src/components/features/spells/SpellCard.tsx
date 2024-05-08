import { IoMdHeart } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface ISpellCardProps {
  isAddedToFavourite: boolean;
  name: string;
  level: number;
  index: string;
}

const SpellCard = ({
  isAddedToFavourite,
  name,
  level,
  index,
}: ISpellCardProps) => {
  const navigate = useNavigate();
  const spellCardClickHandle = () => {
    navigate(`/spells/${index}`);
  };

  return (
    <div
      onClick={spellCardClickHandle}
      className=" border-white border-[0.5px] p-3 rounded-sm hover:cursor-pointer hover:bg-[#efd48b39] hover:border-transparent"
    >
      <div className="flex justify-between  items-center">
        <div>
          <h1 className="text-[18px] font-bold">{name}</h1>
          <div className="bg-secondary text-black py-[1.5px] rounded-full px-2 justify-items-start text-xs inline-block">
            Level {level}
          </div>
        </div>
        <div
          className={`w-8 h-8 ${
            isAddedToFavourite ? 'bg-secondary' : 'bg-white'
          } rounded-full text-[18px] flex justify-center items-center`}
        >
          <IoMdHeart className=" text-md text-black" />
        </div>
      </div>
      <div className="text-sm mt-5">see details</div>
    </div>
  );
};

export default SpellCard;
