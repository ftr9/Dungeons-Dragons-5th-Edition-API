import SecondaryHeader from './SecondaryHeader';

const Components = ({ data }: { data: string[] }) => {
  return (
    <div className="mt-6">
      <SecondaryHeader>Components</SecondaryHeader>
      <div className="flex space-x-3">
        {data.map(el => {
          return (
            <div
              key={el}
              className="h-10 w-10 rounded-md bg-white flex text-primary justify-center items-center"
            >
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Components;
