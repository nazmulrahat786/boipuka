import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../Utlities/Add";
import Book from "../Pages/Book/Book";
const ReadList = () => {
  const data = useLoaderData();
  const [readlist, setReadList] = useState([]);
  useEffect(() => {
    const storedBookData = getStoredBook();
    console.log(storedBookData);
    const csb = storedBookData.map((id) => parseInt(id));
    console.log(csb);
    const storedBook = data.filter((book) => csb.includes(book.bookId));
    setReadList(storedBook);
  }, []);
  const [sort, setSort] = useState("");
  const handleSort = (type) => {
  setSort(type);


  if (type === "pages") {
    const sortedByPage = [...readlist].sort((a, b) => a.totalPages - b.totalPages);
    setReadList(sortedByPage);
  } else if (type === "rating") {
    const sortedBooks = [...readlist].sort((a, b) => b.rating - a.rating);
    setReadList(sortedBooks);
 
  }
}
  return (
    <div>
        <div className="fle mx-auto items-center text-center justify-center">
        <details  className="dropdown ">
        <summary className="btn m-1">Sort by</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={()=>handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={()=>handleSort("rating")}>Ratings</a>
          </li>
        </ul>
      </details>
        </div>
     
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wished List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I read {readlist.length}</h2>
          {readlist.map((b) => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
