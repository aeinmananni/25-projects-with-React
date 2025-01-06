type MainProps = {
  fullName: string;
  rols: string;
  exp: string;
};

const Main = ({ fullName, rols, exp }: MainProps) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-sm">{fullName}</span>
        <small className="text-rose-600 font-semibold">{rols}</small>
      </div>
      <small className="text-justify text-xs text-slate-600">{exp}</small>
    </>
  );
};

export default Main;
