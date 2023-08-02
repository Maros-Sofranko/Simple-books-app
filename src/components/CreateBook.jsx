import { useState } from "react";

const CreateBook = ({ onCreate }) => {
  const [bookTitle, setBookTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(bookTitle);
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
