import { useState } from "react";

const EditBook = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleFormSubmit} className="book-edit">
      <label>Title</label>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default EditBook;
