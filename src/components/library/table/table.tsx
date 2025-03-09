import { useReactContext } from "../../../context";
import { BooksType } from "../model";
import { FaRegTrashCan } from "react-icons/fa6";
const column: Record<keyof Omit<BooksType, "bookId">, string> = {
  bookNumber: "شماره کتاب",
  title: "عنوان",
  author: "نویسنده",
};

export default function Table() {
  const { books, setBooks } = useReactContext();
  const conditions = (index: number) =>
    index > 0 && index !== Object.keys(column).length;
  return (
    <>
      {books && books?.length > 0 ? (
        <table className="w-1/2  flex overflow-hidden  flex-col bg-slate-50">
          <thead className="w-full">
            <tr className="border w-full grid grid-cols-6 grid-flow-col">
              {Object.keys(column).map((col, colIndex) => (
                <th
                  className={`border  text-xs p-2 ${
                    conditions(colIndex) && "col-span-2"
                  }`}
                  key={colIndex}
                >
                  {column[col as keyof Omit<BooksType, "bookId">]}
                </th>
              ))}
              <th className="text-xs flex items-center justify-center">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book, bookIndex) => (
              <tr
                key={bookIndex}
                className="grid grid-cols-6 grid-flow-col bg-lime-600"
              >
                {Object.keys(column).map((col, colIndex) => (
                  <td
                    className={`border  text-sm p-2 text-white ${
                      conditions(colIndex) ? "col-span-2" : "text-center"
                    }`}
                    key={colIndex}
                  >
                    {book[col as keyof BooksType]}
                  </td>
                ))}
                <td className="border flex justify-center items-center">
                  <FaRegTrashCan
                    onClick={() =>
                      setBooks((prev) =>
                        (prev || [])?.filter((it) => it.bookId !== book.bookId)
                      )
                    }
                    size={22}
                    className="text-red-900 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="w-1/2 text-center">{"هیچ کتابی ثبت نشده است"}</div>
      )}
    </>
  );
}
