import Header from "./header";
import { useGetImages } from "../../api";
export default function SearchImages() {
  const { data } = useGetImages();
  console.log("DATA : ", data);
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="w-full h-full   overflow-y-auto grid grid-cols-5">
        <span>Images</span>
      </div>
    </div>
  );
}
