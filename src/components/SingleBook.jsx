import { useState, useContext } from "react";
import BooksContext from "../context/books";
import EditBook from "./EditBook";

const SingleBook = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useContext(BooksContext);

  const deleteBook = () => {
    deleteBookById(book.id);
  };

  const editBook = () => {
    setShowEdit((prevState) => !prevState);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book" />
      <div>
        {!showEdit ? (
          <h3>{book.title}</h3>
        ) : (
          <EditBook book={book} onSubmit={handleSubmit} />
        )}
      </div>
      <div className="actions">
        <button className="edit" onClick={editBook}>
          Edit
        </button>
        <button className="delete" onClick={deleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
