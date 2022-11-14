console.log("Hello World, I'm script.js!");

const books = [
  {title: 1984, author: "George Orwell"},
  {title: "In Search of Lost Time", author: "Marcel Proust"},
  {title: "Don Quixote", author: "Miguel de Cervantes"},
  {title: "Moby Dick", author: "Herman Melville"}
]

console.log(bookFilter(books));

function bookFilter(books) {
  return books.filter(book => book.author!=="George Orwell")
}

function changeColor() {
  document.getElementById("content").style.color = "blue";
}

function updateContent() {
  document.getElementById("content").innerHTML = "Bye-Bye World";
}

let p1, p2, p3;

function setup() {
  createCanvas(500, 500);
  p1 = new Particle(300, 300);
  p2 = new Box(300, 300);
  p3 = new Ellipse(300, 300)
}

function draw() {
  background(255);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
  p3.update();
  p3.show();
}
