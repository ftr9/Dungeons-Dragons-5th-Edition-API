import { IoMdSearch } from 'react-icons/io';

interface ISearchInputProps {
  inputValueChangeHandle: (value: string) => void;
  disabled: boolean;
}

const SearchInput = ({
  inputValueChangeHandle,
  disabled,
}: ISearchInputProps) => {
  return (
    <div className="flex border w-full justify-between p-1 rounded-sm mt-8">
      <input
        disabled={disabled}
        className=" text-inherit px-2 outline-none w-full bg-transparent"
        type="text"
        placeholder="Enter any spell you know"
        onChange={e => {
          inputValueChangeHandle(e.target.value);
        }}
      />
      <div className="h-[30px] w-[30px] shrink-0 bg-[#EFD58B] flex justify-center items-center rounded-sm">
        <IoMdSearch className=" text-black" />
      </div>
    </div>
  );
};

export default SearchInput;
