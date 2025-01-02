import Cart from "./cart";

const Reviews = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
      <span className="underline underline-offset-8 decoration-red-500 decoration-2">
        نظرات همکاران
      </span>
      <Cart />
    </div>
  );
};

export default Reviews;
