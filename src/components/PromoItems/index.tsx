import { FC } from "react";
import { promoItemProps } from "../../types/items.type";
import { PromoContainer, StyledPromoItem } from "./style";

const PromoItem: FC<promoItemProps> = ({ title, img }: promoItemProps) => {
  return (
    <StyledPromoItem>
      <img src={img} alt={title} />
    </StyledPromoItem>
  );
};

const PromoItems: FC = () => {
  return (
    <PromoContainer>
      <PromoItem title='Computador Gamer de gratis, no seu cu' img='www.www' />
      <PromoItem title='Playstation 5 de gratis no seu cu, olhe para tras' img='www.www' />
      <PromoItem title='Xbox Series X de gratis por apenas 5000 miu reais (TA PORRAAAH)' img='www.www' />
    </PromoContainer>
  );
};

export default PromoItems;
