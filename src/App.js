import { useEffect, useContext } from "react";
import CreateBook from "./components/CreateBook";
import BooksList from "./components/BooksList";

import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BooksList />
      <CreateBook />
    </div>
  );
}

export default App;
