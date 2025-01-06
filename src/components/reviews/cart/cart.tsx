import Image from "../../../custom/img";
import Footer from "./footer";
import Main from "./main";
import { users } from "../data";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState<{ index: number; fade: boolean }>({
    index: 0,
    fade: false,
  });

  const handleTransition = (newIndex: number) => {
    setCartItems((prev) => ({ ...prev, fade: true }));
    setTimeout(() => {
      setCartItems((prev) => ({ ...prev, index: newIndex }));
      setCartItems((prev) => ({ ...prev, fade: false }));
    }, 300);
  };

  const { imageUrl, fullName, rols, exp } = users[cartItems.index];

  const { index, fade } = cartItems;
  return (
    <div className="flex flex-col gap-2 border w-1/3 items-center p-3 rounded-lg shadow-md">
      <div
        className={`transition-opacity duration-300 flex flex-col items-center gap-2 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          badgeTitle={2}
          className="w-24 h-24 rounded-full object-cover"
          src={imageUrl}
        />
        <Main fullName={fullName} rols={rols} exp={exp} />
      </div>

      <Footer
        onNext={() => {
          const nextIndex = index < users.length - 1 ? index + 1 : 0;
          handleTransition(nextIndex);
        }}
        onPrev={() => {
          const prevIndex = index > 0 ? index - 1 : users.length - 1;
          handleTransition(prevIndex);
        }}
        onRandom={() => {
          const randomIndex = Math.floor(Math.random() * users.length);
          handleTransition(randomIndex);
        }}
      />
    </div>
  );
};

export default Cart;
