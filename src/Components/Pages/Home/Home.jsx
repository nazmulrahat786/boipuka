import { Suspense, use, useEffect, useState } from "react";
import Banner from "../../Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";


const Home = () => {
    const [allbooks, setAllBooks] = useState([]);
    const data = useLoaderData()

    // useEffect(()=>{
    //     fetch('booksData.json').then(res => res.json()).then(data => setAllBooks(data))
    // },[])
    // const books =fetch('booksData.json').then(res => res.json())
    return (
        <div>
            <Banner></Banner>
           <Suspense fallback={<div className="text-center text-3xl font-bold">Loading...</div>}>
           <Books data={data}></Books>
           </Suspense>
        </div>
    );
};

export default Home;