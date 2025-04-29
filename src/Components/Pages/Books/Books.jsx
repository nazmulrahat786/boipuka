import React, { Suspense, use } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    // const Books = use(books);
  
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>


            <Suspense fallback={<div className="text-center text-3xl font-bold">Loading...</div>}>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {data.map((singleBook) =><Book key={singleBook.bookId}  singleBook={singleBook}></Book>)}
           </div>
            </Suspense>
        </div>
    );
};

export default Books;