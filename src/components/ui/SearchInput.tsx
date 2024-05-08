import {IoMdSearch} from 'react-icons/io'

const SearchInput = () => {
  return (
    <div className="flex border w-full justify-between p-1 rounded-sm mt-8">
      <input
        className=" text-inherit px-2 outline-none w-full bg-transparent"
        type="text"
        placeholder="Enter any spell you know"
      />
      <div className="h-[30px] w-[30px] shrink-0 bg-[#EFD58B] flex justify-center items-center rounded-sm">
        <IoMdSearch className=" text-black" />
      </div>
    </div>
  );
};

export default SearchInput
