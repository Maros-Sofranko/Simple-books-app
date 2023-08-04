import axios from "axios";
import { createContext, useState } from "react";

const BooksContext = createContext();

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  // FETCH all books
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  // CREATE a new book
  const createBook = async (bookTitle) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: bookTitle,
    });

    setBooks((prevBooks) => [...prevBooks, response.data]);
  };

  // DELETE a certain book
  const deleteBookById = async (bookId) => {
    await axios.delete(`http://localhost:3001/books/${bookId}`);

    const updatedBooks = books.filter((book) => book.id !== bookId);

    setBooks(updatedBooks);
  };

  // EDIT a certain book
  const editBookById = async (bookId, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${bookId}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, createBook, deleteBookById, editBookById }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { BooksProvider };
export default BooksContext;
