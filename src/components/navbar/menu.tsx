import Link from "../../custom/link";
import { links } from "./data";
import { useReactContext } from "../../context";
import { useEffect, useRef } from "react";
const Menu = () => {
  const { showMenu } = useReactContext();

  const containerDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerDivRef.current) {
      if (showMenu) {
        const linkHeight = containerDivRef.current.scrollHeight;
        containerDivRef.current.style.height = `${linkHeight}px`;
      } else {
        containerDivRef.current.style.height = `0px`;
      }
    }
  }, [showMenu]);

  return (
    <div
      ref={containerDivRef}
      className={`w-full border flex overflow-hidden transition-all duration-300  sm:hidden justify-start  shadow-md `}
    >
      <div className="flex  flex-col items-center gap-4  w-full">
        {links.map((it, index) => (
          <div className="w-full hover:bg-blue-300 rounded-md group duration-300npm">
            <Link
              className={
                "!bg-transparent !w-full !justify-start group-hover:!text-white"
              }
              key={index}
              to={it.url}
            >
              {it.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
