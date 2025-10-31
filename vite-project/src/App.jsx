import React from "react";
import Book from "./component/Book";
import "./App.css";
import Header from "./component/Header";

const App = () => {
    const data=[
        { image: "", title: "PMaths", price: 200 },
        { image: "", title: "Chemistry", price: 500 },
        { image: "", title: "Biology", price: 300 }
    ]
    return (
        <div>
            <Header />
        <div className="App">
            {data.map((book, index) => (
                <Book key={index} book={book} />
            ))}
        </div></div>
    );
}
