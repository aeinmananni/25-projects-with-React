type ProgressProps = {
  progressValue: number;
};

const Progressbar = ({ progressValue }: ProgressProps) => {
  return (
    <div className="sticky top-0 right-0 z-10">
      <div className="bg-slate-400 w-full h-3">
        <div
          style={{ width: `${progressValue}%` }}
          className={`w-full bg-red-500 h-full duration-500`}
        />
      </div>
    </div>
  );
};

export default Progressbar;
