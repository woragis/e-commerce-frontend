import React from "react";
import { StoreItem } from "../../components/Item";
import { StoreStyling, StyledHomePage } from "./style";
import SlideBox from "../../components/SlideBox";
import PromoItems from "../../components/PromoItems";

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
    { name: "Playstation 4 Pro", price: 4500, old_price: 6000 },
    { name: "Playstation 4 Slim", price: 3500, old_price: 5000 },
    { name: "Playstation 4", price: 4500, old_price: 6000 },
    { name: "Xbox One X", price: 4500, old_price: 5000 },
    { name: "Xbox One Slim", price: 3000, old_price: 3500 },
    { name: "Xbox One", price: 3000, old_price: 3500 },
    { name: "Playstation 3 Super Slim", price: 3500, old_price: 5000 },
    { name: "Playstation 3 Slim", price: 3500, old_price: 5000 },
    { name: "Playstation 3", price: 3500, old_price: 5000 },
    { name: "Xbox 360 Slim", price: 4500, old_price: 5000 },
    { name: "Xbox 360", price: 3000, old_price: 3500 },
    { name: "Playstation", price: 3000, old_price: 3500 },
    { name: "Xbox", price: 3000, old_price: 3500 },
    { name: "Nintendo Switch", price: 2500, old_price: 4000 },
    { name: "Nintendo Wii U", price: 2500, old_price: 4000 },
    { name: "Nintendo Wii", price: 2500, old_price: 4000 },
    { name: "Nintendo New 3DS XL", price: 2500, old_price: 4000 },
    { name: "Nintendo New 3DS", price: 2500, old_price: 4000 },
    { name: "Nintendo 3DS XL", price: 2500, old_price: 4000 },
    { name: "Nintendo 3DS", price: 2500, old_price: 4000 },
    { name: "Nintendo 2DS XL", price: 2500, old_price: 4000 },
    { name: "Nintendo 2DS", price: 2500, old_price: 4000 },
    { name: "Nintendo DS Lite", price: 2500, old_price: 4000 },
    { name: "Nintendo DS", price: 2500, old_price: 4000 },
    { name: "Nintendo GBA", price: 2500, old_price: 4000 },
    { name: "Nintendo GBA SP", price: 2500, old_price: 4000 },
    { name: "Nintendo GB COLOR", price: 2500, old_price: 4000 },
    { name: "Nintendo GB", price: 2500, old_price: 4000 },
    { name: "Pc Gamer Ryzen 5", price: 3500, old_price: 4000 },
    { name: "Pc Gamer I5 13400", price: 4000, old_price: 4500 },
    { name: "Pc Gamer I3 11100F RTX1060", price: 2900, old_price: 3000 },
    { name: "Pc Gamer I5 8400", price: 2000, old_price: 2100 },
    { name: "Pc Gamer I7 12700", price: 3500, old_price: 5000 },
    { name: "Pc Gamer I9 14900k", price: 5500, old_price: 6000 },
    { name: "GPU RTX 3070 TI", price: 5500, old_price: 6000 },
    { name: "GPU RTX 3070", price: 5500, old_price: 6000 },
    { name: "GPU RTX 3060 TI", price: 5500, old_price: 6000 },
    { name: "GPU RTX 2060", price: 5500, old_price: 6000 },
    { name: "GPU RTX 1080 TI", price: 5500, old_price: 6000 },
    { name: "GPU RTX 1080", price: 5500, old_price: 6000 },
  ];

  const sampleStore = sampleItems.map(({ name, price, old_price }: storeItemType, index: number) => {
    while (index < 40 - 1) {
      console.log(name, index);
      return <StoreItem key={name} name={name} price={price} old_price={old_price} />;
    }
    return;
  });
  return <StoreStyling>{sampleStore}</StoreStyling>;
};

const Home = () => {
  return (
    <StyledHomePage>
      {/*
      Refactor Slide Box, it needs to be done from zero
      <SlideBox /> 
      */}
      <PromoItems />
      <Store />
    </StyledHomePage>
  );
};

export default Home;
