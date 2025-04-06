import { Input } from "../../custom/input";
import Card from "./card";

import { products } from "./data";
const FilterProducts = () => {
  return (
    <div className="w-full h-full border border-red-500 overflow-y-auto">
      <div className="flex justify-center flex-col items-center gap-9 p-3">
        <span className="underline decoration-2 underline-offset-8 decoration-blue-600">
          محصولات ما
        </span>
        <Input label="جست و جو" className="border rounded-sm h-8 px-3" />
      </div>
      <div className="p-2 grid grid-cols-4 gap-3">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            price={product.price}
            category={product.category}
            image={product.img}
            exp={product.exp}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterProducts;
