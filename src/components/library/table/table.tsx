import { useReactContext } from "../../../context";

export default function Table() {
  const { books } = useReactContext();
  return (
    <div className="w-1/2 border">
      <h1>{JSON.stringify(books, null, 2)}</h1>
    </div>
  );
}
