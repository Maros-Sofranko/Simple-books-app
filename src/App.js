import { useState } from "react";
import { v4 as uuid } from "uuid";
import CreateBook from "./components/CreateBook";
import BooksList from "./components/BooksList";

function App() {
  const [books, setBooks] = useState([]);

  const generateId = () => {
    return uuid();
  };

  const createBook = (bookTitle) => {
    setBooks((prevBooks) => [
      ...prevBooks,
      { id: generateId(), title: bookTitle },
    ]);
  };

  const deleteBookById = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);

    setBooks(updatedBooks);
  };

  const editBookById = (bookId, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BooksList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <CreateBook onCreate={createBook} />
    </div>
  );
}

export default App;
