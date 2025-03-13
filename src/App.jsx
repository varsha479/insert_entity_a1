
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import AddBook from "./components/AddBook.jsx";
import booksData from "./booksData";
import "./Home.css";

function App() {
  const [books, setBooks] = useState(booksData);

  const addNewBook = (newBook) => {
    setBooks([...books, { id: books.length + 1, ...newBook }]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-book">Add Book</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/add-book" element={<AddBook addNewBook={addNewBook} />} />
      </Routes>
    </Router>
  );
}

export default App;
