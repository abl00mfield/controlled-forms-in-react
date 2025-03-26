import { useState } from "react";

const Bookshelf = () => {
  //holds all the books
  const [books, setBooks] = useState([]);
  //hold the book entered on the form
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    //as the user is typing, it updates the newBook state
    const updatedBook = { ...newBook, [event.target.name]: event.target.value };
    setNewBook(updatedBook);
  };

  const handleSubmit = (event) => {
    // this prevents the default behavior of submitting a form
    event.preventDefault();

    //add the new book to the array of books
    const newBooks = [...books, newBook];
    setBooks(newBooks);

    //reset the form
    setNewBook({
      title: "",
      author: "",
    });
  };

  //this will check if the user has left any fields blank and disables the submit button if so
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
