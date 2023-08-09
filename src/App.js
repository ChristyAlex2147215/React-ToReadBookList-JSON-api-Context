import React, { useState,useEffect, useContext } from 'react'
import BookAddForm from './components/BookAddForm'
import BookList from './components/BookList'
import "../node_modules/bulma/css/bulma.css"
import { bookContext } from './context/bookContext'

const App = () => {
  const { bookList,
    setBookList,
    getBooks}=useContext(bookContext)
  useEffect(()=>
  {
    async function getd()
    {
      const data=await getBooks();
      console.log("data obtained form the server is ",data);
      // const updatedData = data.map(async(item) => {
      // if(!item.id){ await putData(item.id,item.title,`https://picsum.photos/seed/${item.id}/200`)}
      // });
      setBookList(data);
    }
    getd()
   
  },[]);
  return (
    <div className='row'>
      <BookAddForm bookList={bookList} setBookList={setBookList}/>
      {/* for the list of books */}
      <BookList bookList={bookList} setBookList={setBookList}/>
    </div>
  )
}

export default App