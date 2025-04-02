import Card from "./card";
import laptop1 from "./images/laptop-1.webp";
const FilterProducts = () => {
  return (
    <div className="w-full h-full border border-red-500">
      <div className="flex justify-center p-3">
        <span className="underline decoration-2 underline-offset-8 decoration-blue-600">
          محصولات ما
        </span>
      </div>
      <div className=" p-2">
        <Card title={"title"} price={"200089"} image={laptop1} exp={"eeee"} />
      </div>
    </div>
  );
};

export default FilterProducts;
