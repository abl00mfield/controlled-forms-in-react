import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    const updatedBook = { ...newBook, [event.target.name]: event.target.value };
    setNewBook(updatedBook);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBooks = [...books, newBook];
    setBooks(newBooks);
    setNewBook({
      title: "",
      author: "",
    });
  };

  const formHasMissingData = !Object.values(newBook).every(Boolean);

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit" disabled={formHasMissingData}>
            Add Book
          </button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <p>
              <strong>{book.title}</strong>
            </p>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
