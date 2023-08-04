import { createContext, useState } from "react";

const BooksContext = createContext();

function BooksProvider({ children }) {
  const [count, setCount] = useState(5);

  const valueToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { BooksProvider };
export default BooksContext;
