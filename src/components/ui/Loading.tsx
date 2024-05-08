import { PiSpinnerBold } from 'react-icons/pi';

const Loading = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <PiSpinnerBold className="text-xl mb-2 animate-spin" />
      <p>Loading</p>
    </div>
  );
};

export default Loading;
