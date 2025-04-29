import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStorageDB } from '../Utlities/Add';

const BookDetails = () => {
    const {id }= useParams()
    const bookId = parseInt(id)
const data = useLoaderData()
    console.log(data);
    console.log(typeof bookId);
    const singleBook = data.find(book=> book.bookId === bookId)
const {bookName, image} = singleBook;
const handleMarkAsRead = () => {
addToStorageDB(id)
}

    return (
        <div className='flex flex-col items-center justify-center'>
            <img className='w-48' src={image} alt="" />
         
           <h1 className='text-2xl'>Book Name : {bookName}</h1>

           <div className='flex gap-2 m-4'>
           <button onClick={()=>handleMarkAsRead(id)} className="btn btn-success">Mark as Read</button>
           <button className="btn btn-warning">Add to WishList</button>
           </div>
        </div>
    );
};

export default BookDetails;