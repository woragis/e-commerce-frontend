import { StyledStoreItem } from "./style";

export const CartItem = () => {
  return <div>Item</div>;
};

interface storeItemProps {
  name: string;
  price: number;
  old_price: number;
}
export const StoreItem = ({ name, price, old_price }: storeItemProps) => {
  const discount = Math.floor((Number(price) / Number(old_price)) * 100);
  return (
    <StyledStoreItem>
      <p className='item-name'>{name}</p>
      <p className='item-old-price'>R$ {old_price}</p>
      <p className='item-price'>R$ {price}</p>
      <p className='item-discount'>{discount}%</p>
      <p className='item-frete'>Frete gratis</p>
    </StyledStoreItem>
  );
};
