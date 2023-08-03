import SingleBook from "./SingleBook";

const BooksList = ({ books, onDelete, onEdit }) => {
  const booksList = books.map((book) => {
    return (
      <SingleBook
        key={book.id}
        book={book}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  });

  return <div className="book-list">{booksList}</div>;
};

export default BooksList;
