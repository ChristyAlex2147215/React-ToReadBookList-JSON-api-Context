import React, { useState } from 'react'
import "./BookAddForm.css"
import {postData,getData,putData} from "../api"

const BookAddForm = ({setBookList,bookList}) => {
    const [bookName,setBookName]=useState("");

    async function setd()
    {
      
      const data=await postData(bookName,`https://picsum.photos/seed/${Math.ceil(Math.random*9999)}/200`);
      console.log("post data-1 obtained form the server is ",data);
    
      // for (const item of bookList) {
      //   if (!item.url) {
      //     console.log("Updated Data:", item.id,item.title);
      //     const updatedItem = await putData(item.id, item.title, `https://picsum.photos/seed/${item.id}/200`);
         
      //   }
      // }
      
      
      setBookList(await getData());
 
    }
    const  onChangeBookName=(e)=>
    {
       
      setBookName(e.target.value);
        
    }
    const AddBook=(e)=>
    {
      console.log("Adding a new book")
        e.preventDefault();
        console.log("book name: ",bookName);
        const randomId=Math.ceil(Math.random()*9999);
        // setBookList([...bookList,{id:randomId,title:bookName,img:`https://picsum.photos/seed/${randomId}/200`}])
        setd();
    }

  return (
    <div className='box column is-half is-offset-one-quarter'>
        <form onSubmit={AddBook} className='form is-half'>
            <label className='label'>Book Name:</label>
            <input type='text' placeholder='book name' onChange={onChangeBookName} className='input'/>
            <button onClick={AddBook} className='button is-primary my-2'>Add</button>
        </form>
    </div>
  )
}

export default BookAddForm