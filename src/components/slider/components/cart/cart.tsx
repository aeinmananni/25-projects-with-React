import { Image } from "../../../../custom/img";
import image1 from "../../images/image1.jpg";

export default function Cart() {
  return (
    <div className="w-full border h-full flex flex-col items-center gap-5 p-3 overflow-hidden">
      <Image src={image1} className="w-48 h-32 rounded-lg" />
      <div className="flex flex-col items-center justify-center gap-1">
        <span className="text-red-500 font-bold text-lg">{`ماریا کریمی`}</span>
        <small>{`مهندس ساختمان`}</small>
      </div>
      <p className="text-center">{`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.`}</p>
    </div>
  );
}
