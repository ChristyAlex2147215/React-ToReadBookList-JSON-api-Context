import axios from "axios"
export const getData=async()=>
{
 console.log("get request")
   try{
    const data=await axios.get("http://localhost:3001/books");
    //data.books is a array of object
    console.log("response data from json =>",data.data);
    return data.data;
   }
   catch(err)
   {
    console.log(err);
   }

}  
export const postData=async(title,url)=>
{
   try{
    const data=await axios.post("http://localhost:3001/books",{title,url});
    //data is a json object
    console.log("post data response =>",data.data);
   return data.data
   }
   catch(err)
   {
    console.log(err);
   }

}  

export const delData=async(id)=>
{
   try{
    const data=await axios.delete(`http://localhost:3001/books/${id}`);
    //data is a json object
    console.log("delete response =>",data);
    return data
   }
   catch(err)
   {
    console.log(err);
   }

}  

export const putData=async(id,title,url)=>
{
    console.log("put request");
    console.log(id);
    console.log(title);
    console.log(url);
   try{
    const data=await axios.put(`http://localhost:3001/books/${id}`,{id,title,url});
    //data is a json object
    console.log("put data response =>",data.data)
  return data;
   }
   catch(err)
   {
    console.log(err);
   }

}  



