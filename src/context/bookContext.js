import React, { createContext, useState } from "react";
import axios from "axios";

export const bookContext = createContext();

const editBookById = async (id, title, url) => {
  const response = await axios.put(`http://localhost:3001/books/${id}`, {
    id,
    title,
    url,
  });
  console.log("edit request response from context is =>",response.data);
  return response.data;
};

const createBook = async (title, url) => {
  const response = await axios.post("http://localhost:3001/books", {
    title,
    url,
  });
  console.log("create request response from context is =>",response.data);
  return response.data;
};

const deleteBookById = async (id) => {
  const response = await axios.delete(`http://localhost:3001/books/${id}`);
  console.log("delete request response from context is =>",response.data);
  return response.data;
};

const getBooks = async () => {
  const response = await axios.get("http://localhost:3001/books");
  console.log("get request response from context is =>",response.data);
  return response.data;
};

const Provider = ({ children }) => {
  const [bookList, setBookList] = useState([]);

  return (
    <bookContext.Provider
      value={{
        bookList,
        setBookList,
        getBooks,
        editBookById,
        deleteBookById,
        createBook,
      }}
    >
      {children}
    </bookContext.Provider>
  );
};

export default Provider;
