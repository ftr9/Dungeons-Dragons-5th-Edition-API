import React from 'react';

const SpellFilter = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between items-center my-10">{children}</div>
  );
};

SpellFilter.Name = ({ children }: { children: string }) => {
  return <p>{children}</p>;
};

SpellFilter.LevelSelect = () => {
  const ten_levels = new Array(10).fill('a').map((_, idx) => idx + 1);

  return (
    <select className="bg-secondary text-black p-2 outline-none rounded-sm text-sm ">
      <option>All levels</option>
      {ten_levels.map(level => (
        <option key={level}>{level}</option>
      ))}
    </select>
  );
};

export default SpellFilter;
