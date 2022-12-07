import React from "react";
import { HomeTop } from "./HomeTop";
import { HomeGroup } from "./HomeGroup";
import { PlusButton } from "./PlusButton";

export const Home = () => {
  return (
    <>    
      <HomeTop />
      <PlusButton />
      <HomeGroup />
    </>
  );
};
