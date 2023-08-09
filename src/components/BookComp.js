import React, { useState } from 'react'
import "./BookComp.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getData,putData,delData } from '../api';

const BookComp = ({url,title,setBookList,id,bookList}) => {
  const [editMode,setEditMode]=useState(false);
  const [name,setName]=useState(title);
  const onClickEdit=()=>
  {
    setEditMode(!editMode);
  }
  const onClickDelete=async()=>
  {
    console.log("Delete function");
    console.log(id);
    console.log(bookList)
    // const newBl=bookList.filter((item)=>{return item.id !== id});
    // console.log("filter result is =>",newBl);
    // setBookList(newBl);
    await delData(id);
    setBookList(await getData());


  }
  const updateName=(e)=>
  {
    setName(e.target.value)
  }
  const chengeTitle=async(e)=>
  {
    // const updatedList = bookList.map(item => {
    //   if (item.id === id) {
    //     return { ...item, title: name };
    //   }
    //   return item;
    // });
    await putData(id,name,`https://picsum.photos/seed/${id}/200`);
    setBookList(await getData());
    setEditMode(!editMode);

    
  }
  return (
    <div className='book-border'>
        <div className='book-buttons'>
            <EditIcon icon="fa-pencil" className="icon book-button" onClick={onClickEdit}/>
            <DeleteIcon icon="fa-bin" onClick={onClickDelete} className="icon book-button"/>
        </div>
        <div className='book-body'>
          <img src={url} alt='not found' style={{maxWidth:150,maxHeight:150}}/>

        </div>
        <div className='book-title'>{<input type='text' value={name} disabled={!editMode} onChange={updateName}/> || "book title"}</div>
        {editMode ? <button onClick={chengeTitle}>Done</button>:<div className='book-title'>{id || "book id"}</div>}
    </div>
  )
}

export default BookComp