function Book(props) {
  const image = React.createElement("img", {
    src: props.image,
    width: 200,
    height: 200,
    alt: "Book Image"
  });
  const h3 = React.createElement("h3", {}, "Title: " + props.title);
  const h4 = React.createElement("h4", {}, "Price: $" + props.price);
  const button = React.createElement("button", {}, "Buy Now");

  return React.createElement("div", { className: "card" }, image, h3, h4, button);
}

const books = [
  { image: "", title: "PMaths", price: 200 },
  { image: "", title: "Chemistry", price: 500 },
  { image: "", title: "Biology", price: 300 }
];

// map the array to elements
const bookElements = books.map(b =>
  React.createElement(Book, {
    image: b.image,
    title: b.title,
    price: b.price
  })
);

// create container
const bookList = React.createElement("div", {}, bookElements);

// render to DOM
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(bookList);
