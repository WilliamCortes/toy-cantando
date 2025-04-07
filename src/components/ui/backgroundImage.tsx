import React, { FC } from "react";

type props = {
  children: React.ReactNode;
  imageUrl: string;
};

const BackgroundImageContainer: FC<props> = ({ children, imageUrl }) => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="relative z-10 pt-[52%]">{children}</div>
    </div>
  );
};

BackgroundImageContainer.displayName = "BackgroundImageContainer";

export { BackgroundImageContainer };
