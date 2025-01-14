import Header from "./header";

export default function SearchImages() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="w-full h-full   overflow-y-auto grid grid-cols-5">
        <span>Images</span>
      </div>
    </div>
  );
}
