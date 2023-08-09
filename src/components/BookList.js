import React from 'react';
import BookComp from './BookComp';
import './BookList.css';

const BookList = ({ bookList,setBookList }) => {
  console.log('book list is =>', bookList);

  const booksMap = bookList.map((book,key) => {
    console.log(key);
    return <BookComp id={book.id} url={book.url} title={book.title} setBookList={setBookList} bookList={bookList} />
});

  // booksMap.forEach((element,key) => {
  //   console.log(key)
  //   console.log(element)
    
  // });
  console.log("Mapped components are => "+booksMap);

  return (
   <div>
     <h2 className='title is-3'>Reading List</h2>
    <div className='book-list columns is-mobile box'>
      {booksMap}
    </div>
   </div>
  );
};

export default BookList;
