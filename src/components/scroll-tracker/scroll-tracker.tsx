import Header from "./header";
import Progressbar from "./progressbar";
import { useRef } from "react";
import { useOnScroll } from "./hook";
const ScrollTracker = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const { progress } = useOnScroll(elementRef);

  return (
    <div ref={elementRef} className="flex flex-col  h-full overflow-y-auto">
      <Header />
      <Progressbar progressValue={Math.floor(progress)} />
      <div className="flex flex-col gap-12  h-max mt-12">
        {Array.from({ length: 34 }).map((_it, index) => (
          <p key={index} className="text-gray-700 font-medium">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollTracker;
