import style from "./style.module.css";

const Header = () => {
  return (
    <>
      <div className=" w-full !h-44 py-4 px-1 bg-indigo-100">
        <ul className="flex items-center h-full gap-3">
          <li className={style.liTags}>خانه</li>
          <li className={style.liTags}>مشترکین</li>
          <li className={style.liTags}>درباره ما</li>
          <li className={style.liTags}>سامانه های پشتیبانی</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
