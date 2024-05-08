import SecondaryHeader from './SecondaryHeader';

const Classes = ({ name, values }: { name: string; values: string[] }) => {
  return (
    <div className="mt-6">
      <SecondaryHeader>{name}</SecondaryHeader>

      <div className="flex space-x-3 flex-wrap justify-center md:justify-start ">
        {values.map(value => (
          <div
            key={value}
            className="bg-white text-center text-black text-sm mb-2  px-5 py-1 rounded-full"
          >
            {value}
          </div>
        ))}
      </div>
      {values.length === 0 && (
        <p className="text-sm">no {name.toLowerCase()}</p>
      )}
    </div>
  );
};

export default Classes;
