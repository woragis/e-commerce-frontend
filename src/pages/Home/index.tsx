import React from "react";
import { StoreItem } from "../../components/Item";
import { StoreStyling, StyledHomePage } from "./style";
import SlideBox from "../../components/SlideBox";

const Store = () => {
  interface storeItemType {
    name: string;
    price: number;
    old_price: number;
  }

  const sampleItems: storeItemType[] = [
    { name: "Playstation 5", price: 4500, old_price: 6000 },
    { name: "Playstation 5 Digital Edition", price: 3500, old_price: 5000 },
    { name: "Xbox Series X", price: 4500, old_price: 5000 },
    { name: "Xbox Series S", price: 3000, old_price: 3500 },
    { name: "Pc Gamer Ryzen 5", price: 3500, old_price: 4000 },
    { name: "Pc Gamer I5 13400", price: 4000, old_price: 4500 },
    { name: "Pc Gamer I3 11100F RTX1060", price: 2900, old_price: 3000 },
    { name: "Pc Gamer I5 8400", price: 2000, old_price: 2100 },
    { name: "Pc Gamer I7 12700", price: 3500, old_price: 5000 },
    { name: "Pc Gamer I9 14900k", price: 5500, old_price: 6000 },
  ];

  const sampleStore = sampleItems.map(({ name, price, old_price }: storeItemType) => {
    return <StoreItem key={name} name={name} price={price} old_price={old_price} />;
  });
  return <StoreStyling>{sampleStore}</StoreStyling>;
};

const Home = () => {
  return (
    <StyledHomePage>
      <SlideBox />
    </StyledHomePage>
  );
};

export default Home;
