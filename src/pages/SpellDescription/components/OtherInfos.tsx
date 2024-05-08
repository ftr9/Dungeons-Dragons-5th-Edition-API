import React from 'react';

const OtherInfos = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] mt-6">
      {children}
    </div>
  );
};

export default OtherInfos;
