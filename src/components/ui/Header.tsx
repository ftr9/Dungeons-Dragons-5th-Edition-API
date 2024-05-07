import React from 'react';
import ReactLogoImage from '../../assets/react-logo-image.png';
import { IoHeart, IoHome } from 'react-icons/io5';

interface INavLinkItemProps {
  children: React.ReactNode;
}
const NavLinkItem = ({ children }: INavLinkItemProps) => {
  return (
    <li className="flex flex-col items-center cursor-pointer">{children}</li>
  );
};
NavLinkItem.Icon = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-xl">{children}</div>;
};
NavLinkItem.Name = ({ children }: { children: string }) => {
  return <p className="text-sm mt-2">{children}</p>;
};

const Header = () => {
  return (
    <div className="py-5 flex justify-between items-center">
      <img src={ReactLogoImage} className="h-20" alt="react logo" />
      <ul className="flex space-x-10">
        <NavLinkItem>
          <NavLinkItem.Icon>
            <IoHome />
          </NavLinkItem.Icon>
          <NavLinkItem.Name>All Spells</NavLinkItem.Name>
        </NavLinkItem>

        <NavLinkItem>
          <NavLinkItem.Icon>
            <IoHeart />
          </NavLinkItem.Icon>
          <NavLinkItem.Name>Favourites</NavLinkItem.Name>
        </NavLinkItem>
      </ul>
    </div>
  );
};

export default Header;
