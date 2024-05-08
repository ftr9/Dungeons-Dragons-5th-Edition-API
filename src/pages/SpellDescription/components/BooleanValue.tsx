import { MdCheck } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';

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

export default BooleanValue;
