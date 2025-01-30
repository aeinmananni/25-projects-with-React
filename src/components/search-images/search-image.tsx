import Header from "./header";
import { useGetImages } from "../../api";
import { Image } from "../../custom/img";

export default function SearchImages() {
  const { data } = useGetImages();
  const images = data?.results;

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="w-full h-full overflow-y-auto overflow-x-hidden flex justify-center flex-wrap gap-4 p-4">
        {images?.map((it, index) => (
          <div
            key={index}
            className="relative w-72 border flex justify-center items-center"
          >
            <Image
              width={200}
              height={200}
              src={it.urls.small}
              alt={it.alt_description || "Image"}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 bg-black text-white p-2 text-center">
              {it.description || it.alt_description || "No Description"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
