import Question from "./questions";
import data from "./data";
const Accordion = () => {
  return (
    <div className="w-1/2 flex flex-col gap-2 shadow-md py-4 rounded-md px-2">
      <h1>{"سوالی برایتان پیش امده است"}</h1>
      {data.map((it, index) => (
        <Question
          key={index}
          title={it.title}
          exp={it.descriptions}
          onClick={() => console.log("WWW")}
        />
      ))}
    </div>
  );
};

export default Accordion;
