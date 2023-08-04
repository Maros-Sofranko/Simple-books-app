import { useState, useContext } from "react";
import BooksContext from "../context/books";

const CreateBook = () => {
  const [bookTitle, setBookTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const onSubmit = (e) => {
    e.preventDefault();
    createBook(bookTitle);
    setBookTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={onSubmit}>
        <label>Book Title</label>
        <input
          className="input"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <button className="button" type="submit">
          Create Book
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
