import React from "react";
import { StoreItem } from "../../components/Item";

const Home = () => {
  return (
    <div>
      <StoreItem name='Playstation 5' price={344090} old_price={449990} />
      <StoreItem name='Playstation 5' price={899} old_price={1600} />
      <h1>Projcets</h1>
      <h3>Desktop usage</h3>
      <p>Text editor in Rust</p>
      <h3>Web</h3>
      <p>Landing Page</p>
      <p>E-commerce</p>
      <h3>Android</h3>
      <strong>Useful Apps</strong>
      <p>App de treino de academia</p>
      <p>Todo app</p>
      <small>usar o auth</small>
    </div>
  );
};

export default Home;
