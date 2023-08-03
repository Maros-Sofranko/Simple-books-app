import { useEffect, useState } from "react";
import CreateBook from "./components/CreateBook";
import BooksList from "./components/BooksList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("http://localhost:3001/books");

      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  const createBook = async (bookTitle) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: bookTitle,
    });

    setBooks((prevBooks) => [...prevBooks, response.data]);
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
      <BooksList
        books={books}
        onDelete={deleteBookById}
        onEdit={editBookById}
      />
      <CreateBook onCreate={createBook} />
    </div>
  );
}

export default App;
