import { useState } from "react";
import type { CartItemType } from "../../../types/cart/cart-item.types";
import { X } from "lucide-react";

const CartItem = ({ id, urlImg, title, price, quantity }: CartItemType) => {
  const [numberItem, setNumberItem] = useState(quantity);

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = +e.target.value;
    if (quantity >= 1 && quantity <= 10) {
      setNumberItem(quantity);
    }
  };

  return (
    <tr key={id} className="text-center border-b border-gray-100">
      <td className="px-4 py-2">
        <img
          src={urlImg}
          alt="product image"
          className="w-20 h-auto rounded-lg mx-auto"
          loading="lazy"
        />
      </td>
      <td className="px-4 py-2">{title}</td>
      <td className="px-4 py-2">${price}</td>
      <td className="px-4 py-2">
        <input
          type="number"
          min="1"
          max="10"
          value={numberItem}
          onChange={handleChangeQuantity}
          className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
        />
      </td>
      <td className="px-4 py-2">${(numberItem * price).toFixed(2)}</td>
      <td className="px-4 py-2">
        <span className="inline-block cursor-pointer p-1 bg-gray-100 rounded-sm transition duration-300 hover:text-red-500">
            <X size={16} />
        </span>
      </td>
    </tr>
  );
};

export default CartItem;
