interface INavLinkItemProps {
  children: React.ReactNode;
  onClicked: () => void;
}

const NavLinkItem = ({ children, onClicked }: INavLinkItemProps) => {
  return (
    <li
      onClick={onClicked}
      className="flex flex-col items-center cursor-pointer"
    >
      {children}
    </li>
  );
};
NavLinkItem.Icon = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-[16px] md:text-[22px]">{children}</div>;
};
NavLinkItem.Name = ({ children }: { children: string }) => {
  return <p className=" text-[12px] md:text-[16px] mt-2">{children}</p>;
};

export default NavLinkItem;
