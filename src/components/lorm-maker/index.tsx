import Button from "../../custom/button";
import Input from "../../custom/input";

const LormMaker = () => {
  return (
    <div className="w-full h-full p-2 overflow-hidden flex flex-col gap-2">
      <div className="flex flex-col gap-5 w-full">
        <span className="text-lg text-orange-500">لورم ساز زیبا</span>
        <div className="flex w-full items-center gap-2">
          <Button className="bg-blue-500 text-white w-1/12 rounded-md">
            ss
          </Button>
          <Input
            label="تعداد پاراگراف"
            className="border p-1 rounded-md w-full px-2 text-sm"
          />
        </div>
      </div>
      <form className=" w-full h-full p-2">
        <article>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </article>
      </form>
    </div>
  );
};

export default LormMaker;
