

import React from "react";
import BookCard from "./components/BookCard";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ books }) => {
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <Link to="/add-book">
        <button className="add-button">Add a New Book</button>
      </Link>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;