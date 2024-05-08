import SecondaryHeader from './SecondaryHeader';

const Description = ({ data }: { data: string[] }) => {
  return (
    <div className="mt-6">
      <SecondaryHeader>Description</SecondaryHeader>
      {data.map((desc, idx) => (
        <p key={idx} className="mt-1">
          {desc}
        </p>
      ))}
    </div>
  );
};

export default Description;
