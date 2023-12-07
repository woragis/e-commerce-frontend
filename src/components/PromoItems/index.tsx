import { FC } from "react";
import { promoItemProps } from "../../types/items.type";
import { PromoContainer, StyledPromoItem } from "./style";
import { motion } from "framer-motion";
import { useSpring, animated, config } from "react-spring";
import { Link } from "react-router-dom";

const PromoItem: FC<promoItemProps> = ({ id, title, img }: promoItemProps) => {
  return (
    <StyledPromoItem>
      <Link to={"/item/" + id}>
        <div className='rgb-container'>
          <div className='promo-item'>
            <img src={img} alt={title} />
          </div>
        </div>
      </Link>
    </StyledPromoItem>
  );
};

const PromoItems: FC = () => {
  const discounts = [
    { id: 0, title: "Playstation 5", img: "www" },
    { id: 1, title: "Playstation 4", img: "www" },
    { id: 2, title: "Playstation 3", img: "www" },
    { id: 3, title: "Playstation 2", img: "www" },
    { id: 4, title: "Playstation 1", img: "www" },
    { id: 5, title: "Xbox Series X", img: "www" },
    { id: 6, title: "Xbox Series S", img: "www" },
    { id: 7, title: "Xbox One X", img: "www" },
    { id: 8, title: "Xbox One slim", img: "www" },
    { id: 9, title: "Xbox One", img: "www" },
  ];
  const promoItems = discounts.map(({ id, title, img }, index) => {
    if (index > 2) {
      return;
    }
    return <PromoItem key={id} id={id} title={title} img={img} />;
  });
  return <PromoContainer>{promoItems}</PromoContainer>;
};

export default PromoItems;
