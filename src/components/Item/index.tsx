import { FaPlus, FaMinus } from "react-icons/fa6";
import { StyledStoreItem } from "./style";

export const CartItem = ({ name, price, old_price }: storeItemProps) => {
  return (
    <div>
      <p className='item-name'>{name.toUpperCase()}</p>
      <p className='price'>{price}</p>
      <button>
        Add <FaPlus />
      </button>
      <button>
        Minus <FaMinus />
      </button>
      <button>Buy Alone</button>
    </div>
  );
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
      <img src='#' alt={"Image of " + name} className='item-img' />
      <p className='item-name'>{name}</p>
      <p className='item-old-price'>R$ {old_price}</p>
      <p className='item-price'>R$ {price}</p>
      <p className='item-discount'>{discount}%</p>
      <p className='item-frete'>Frete gratis</p>
    </StyledStoreItem>
  );
};
