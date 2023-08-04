import { useContext } from "react";
import BooksContext from "../context/books";
import SingleBook from "./SingleBook";

const BooksList = () => {
  const { books } = useContext(BooksContext);

  const booksList = books.map((book) => {
    return <SingleBook key={book.id} book={book} />;
  });

  return <div className="book-list">{booksList}</div>;
};

export default BooksList;
