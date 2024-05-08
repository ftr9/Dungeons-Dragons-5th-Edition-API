const SpellCardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
      {children}
    </div>
  );
};
export default SpellCardContainer;
