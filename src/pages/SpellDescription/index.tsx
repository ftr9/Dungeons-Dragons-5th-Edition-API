import { RxCross1 } from 'react-icons/rx';
import { MdCheck } from 'react-icons/md';

const SecondaryHeader = ({ children }: { children: string }) => {
  return (
    <h1 className=" text-secondary text-[16px] font-semibold mb-2">
      {children}
    </h1>
  );
};

const Description = () => {
  return (
    <div className="mt-6">
      <SecondaryHeader>Description</SecondaryHeader>
      <p>
        You attempt to send one creature that you can see within range to
        another plane of existence. The target must succeed on a charisma saving
        throw or be banished.
      </p>
      <p className="mt-1">
        You attempt to send one creature that you can see within range to
        another plane of existence. The target must succeed on a charisma saving
        throw or be banished.
      </p>
    </div>
  );
};

const Components = () => {
  return (
    <div className="mt-6">
      <SecondaryHeader>Components</SecondaryHeader>
      <div className="flex space-x-3">
        <div className="h-10 w-10 rounded-md bg-white flex text-primary justify-center items-center">
          S
        </div>
        <div className="h-10 w-10 rounded-md bg-white text-primary flex justify-center items-center">
          V
        </div>
        <div className="h-10 w-10 rounded-md bg-white flex text-primary justify-center items-center">
          M
        </div>
      </div>
    </div>
  );
};

const Info = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="text-center border-[#EFD58B] border-[0.5px] py-3 rounded-md">
      <SecondaryHeader>{name}</SecondaryHeader>
      <p>{value}</p>
    </div>
  );
};

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
    </div>
  );
};

const BooleanValue = ({
  name,
  isPresent,
}: {
  name: string;
  isPresent: boolean;
}) => {
  return (
    <div
      className={`flex space-x-2 items-center text-sm py-2 px-5 rounded-full ${
        isPresent ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      <p>{name}</p>
      {isPresent ? <MdCheck /> : <RxCross1 />}
    </div>
  );
};

const OtherInfos = () => {
  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] mt-6">
      <Info name="Range" value="cool" />
      <Info name="Level" value="cool" />
      <Info name="School" value="cool" />
      <Info name="Material" value="cool" />
      <Info name="Casting Time" value="cool" />
    </div>
  );
};

const HigherLevel = () => {
  return (
    <div className="mt-6">
      <SecondaryHeader>Higher Level</SecondaryHeader>
      <p>
        You attempt to send one creature that you can see within range to
        another plane of existence. The target must succeed on a charisma saving
        throw or be banished.
      </p>
    </div>
  );
};

const SpellDescription = () => {
  return (
    <div className=" md:w-[75%] mx-auto">
      <h1 className="text-secondary text-[24px] font-bold">Bane</h1>

      <div className="flex  mb-2 space-y-2 space-x-0 md:space-x-3 md:space-y-0 mt-2 flex-wrap">
        <BooleanValue name="Concentration" isPresent={false} />
        <BooleanValue name="cast in a 10-min ritual" isPresent />
      </div>

      <Description />
      <Components />
      <HigherLevel />
      <OtherInfos />
      <Classes
        name="Classes"
        values={['one', 'two', 'three', 'four', 'five']}
      />
      <Classes
        name="Sub Classes"
        values={['one', 'two', 'three', 'four', 'five']}
      />
    </div>
  );
};

export default SpellDescription;
