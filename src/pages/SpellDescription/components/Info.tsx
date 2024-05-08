import SecondaryHeader from './SecondaryHeader';

const Info = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="text-center border-[#EFD58B] border-[0.5px] py-3 rounded-md">
      <SecondaryHeader>{name}</SecondaryHeader>
      <p>{value}</p>
    </div>
  );
};

export default Info;
