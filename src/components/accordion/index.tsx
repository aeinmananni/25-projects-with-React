import Question from "./questions";

const Accordion = () => {
  return (
    <div className="w-1/2 flex flex-col gap-2 shadow-md">
      <h1>{"سوالی برایتان پیش امده است"}</h1>
      <Question />
      <div className="w-full h-max p-2">
        📖Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        repudiandae repellendus enim ut debitis, iure commodi perferendis
        dignissimos! Fugit, inventore! Quibusdam harum quam dolor. Labore aut
        facere tempore quos laboriosam. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Accusamus magnam qui atque ipsam natus. Adipisci
        officiis quaerat officia animi dignissimos aliquid necessitatibus id,
        mollitia, dolore placeat repellat pariatur totam voluptatem possimus
        laboriosam molestias vero ab voluptate neque vitae ipsam. Quod obcaecati
        eveniet ipsam necessitatibus laborum ut veniam, dolores doloremque
        alias?
      </div>
    </div>
  );
};

export default Accordion;
