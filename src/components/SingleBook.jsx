import { useState } from "react";
import EditBook from "./EditBook";

const SingleBook = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const deleteBook = () => {
    onDelete(book.id);
  };

  const editBook = () => {
    setShowEdit((prevState) => !prevState);
  };

  const handleSubmit = (bookId, newTitle) => {
    onEdit(bookId, newTitle);
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
