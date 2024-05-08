import { IoMdHeart } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import useFavouriteSpellsStore from './store/useFavouriteSpells.store';

interface ISpellCardProps {
  name: string;
  level: number;
  index: string;
  url: string;
}

const SpellCard = ({ name, level, index, url }: ISpellCardProps) => {
  const navigate = useNavigate();

  const [spells, addSpellsToFavouriteAction, removeSpellsFromFavouriteAction] =
    useFavouriteSpellsStore(store => [
      store.spells,
      store.addSpellsToFavourite,
      store.removeSpellsFromFavourite,
    ]);

  const spellCardClickHandle = () => {
    navigate(`/spells/${index}`);
  };

  const favouriteClickHandle = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (isAddedToFavourite) {
      removeSpellsFromFavouriteAction(index);
    } else {
      addSpellsToFavouriteAction({ name, index, url, level });
    }
  };

  const isAddedToFavourite = spells.find(spell => spell.index === index);

  return (
    <div
      onClick={spellCardClickHandle}
      className=" border-white border-[0.5px] p-3 rounded-sm hover:cursor-pointer hover:bg-[#efd48b39] hover:border-transparent "
    >
      <div className="flex justify-between  items-center">
        <div>
          <h1 className="text-[18px] font-bold">{name}</h1>
          <div className="bg-secondary text-black py-[1.5px] rounded-full px-2 justify-items-start text-xs inline-block">
            Level {level}
          </div>
        </div>
        <div
          onClick={favouriteClickHandle}
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
