import SecondaryHeader from './SecondaryHeader';

const Material = ({ data }: { data: string }) => {
  return (
    <div className="mt-6">
      <SecondaryHeader>Materials</SecondaryHeader>
      <p>{data ? data : 'no material'}</p>
    </div>
  );
};

export default Material;
