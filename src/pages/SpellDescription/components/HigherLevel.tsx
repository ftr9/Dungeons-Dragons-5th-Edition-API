import SecondaryHeader from './SecondaryHeader';

const HigherLevel = ({ data }: { data: string[] }) => {
  return (
    <div className="mt-6">
      <SecondaryHeader>Higher Level</SecondaryHeader>
      {data.map((higherlevel, idx) => {
        return <p key={idx}>{higherlevel}</p>;
      })}
      {data.length === 0 && <p className="text-sm">no higher level</p>}
    </div>
  );
};

export default HigherLevel;
