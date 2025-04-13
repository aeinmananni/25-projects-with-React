import { Input } from "../../custom/input";
import Card from "./card";
import { ProductType } from "./models";
import { products } from "./data";
import { ChangeEvent, useState } from "react";
const FilterProducts = () => {
  const [newProducts, setNewProducts] = useState<ProductType[]>(products);

  const handelSearch = (category: string) => {
    const filterItem = products.filter((it) =>
      it.title.toUpperCase().includes(category)
    );

    setNewProducts(filterItem);
  };

  return (
    <div className="w-full h-full border border-red-500 overflow-y-auto">
      <div className="flex justify-center flex-col items-center gap-9 p-3">
        <span className="underline decoration-2 underline-offset-8 decoration-blue-600">
          محصولات ما
        </span>
        <Input
          label="جست و جو"
          className="border rounded-sm h-8 px-3"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handelSearch(e.target.value)
          }
        />
      </div>
      {newProducts.length > 0 ? (
        <div className="p-2 grid grid-cols-4 gap-3">
          {newProducts.map((product, index) => (
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
      ) : (
        <div className="w-full text-center py-5 bg-red-500 text-white">
          کالایی موجود نیست
        </div>
      )}
    </div>
  );
};

export default FilterProducts;
