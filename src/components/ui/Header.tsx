import ReactLogoImage from '../../assets/react-logo-image.png';
import { IoHeart, IoHome } from 'react-icons/io5';
import NavLinkItem from './NavLinkItem';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const allSpellsNavHandle = () => {
    navigate('/');
  };

  const favouriteSpellsHandle = () => {
    navigate('/favourites');
  };

  return (
    <div className="py-5 flex justify-between items-center">
      <img src={ReactLogoImage} className="h-12 md:h-20" alt="react logo" />
      <div className="flex space-x-3 md:space-x-10">
        <NavLinkItem onClicked={allSpellsNavHandle}>
          <NavLinkItem.Icon>
            <IoHome />
          </NavLinkItem.Icon>
          <NavLinkItem.Name>All Spells</NavLinkItem.Name>
        </NavLinkItem>

        <NavLinkItem onClicked={favouriteSpellsHandle}>
          <NavLinkItem.Icon>
            <IoHeart />
          </NavLinkItem.Icon>
          <NavLinkItem.Name>Favourites</NavLinkItem.Name>
        </NavLinkItem>
      </div>
    </div>
  );
};

export default Header;
