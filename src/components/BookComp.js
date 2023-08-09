import React, { useContext, useState } from 'react'
import "./BookComp.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { bookContext } from '../context/bookContext';

const BookComp = ({url,title,id}) => {
  const [editMode,setEditMode]=useState(false);
  const [name,setName]=useState(title);
  const {bookList,
    setBookList,
    getBooks,
    editBookById,
    deleteBookById}=useContext(bookContext);
  const onClickEdit=()=>
  {
    setEditMode(!editMode);
  }
  const onClickDelete=async()=>
  {
    console.log("Delete function");
    console.log(id);
    // const newBl=bookList.filter((item)=>{return item.id !== id});
    // console.log("filter result is =>",newBl);
    // setBookList(newBl);
    const res=await deleteBookById(id);
    const newList=bookList.filter((item)=>{return (item.id!==id)})
    setBookList(newList);


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
    await editBookById(id,name,`https://picsum.photos/seed/${id}/200`);
    setBookList(await getBooks());
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