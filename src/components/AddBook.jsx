import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = ({ addNewBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewBook({ title, author, description, coverImage });
    navigate("/"); // Redirect to Home
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="url" placeholder="Cover Image URL" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;