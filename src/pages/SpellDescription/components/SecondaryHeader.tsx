const SecondaryHeader = ({ children }: { children: string }) => {
  return (
    <h1 className=" text-secondary text-[16px] font-semibold mb-2">
      {children}
    </h1>
  );
};

export default SecondaryHeader;
