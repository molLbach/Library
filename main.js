class Book{
    constructor(title,author,pages,read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
    }
  
}
const myLibrary = [];

function addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

let ktab;
let choicecard = document.querySelector(".addcard");
let overlay = document.querySelector(".overlay")

function revealChoice(){
    choicecard.style.visibility = "visible";
    overlay.style.display = "block";
}
let btnsubmit = document.querySelector(".btnsubmit");
btnsubmit.addEventListener("click",(event)=>{
 event.preventDefault();
 const pages = document.querySelector("#pagesholder").value;
 const title = document.querySelector("#titleholder").value;
 const author = document.querySelector("#authorholder").value;
 const check = document.querySelector("#checkinput").checked;
addBook(title,author,pages,check);
document.querySelector("#pagesholder").value = '';
document.querySelector("#titleholder").value = '';
document.querySelector("#authorholder").value = '';
document.querySelector("#checkinput").checked = false;
choicecard.style.visibility = "hidden";
overlay.style.display = "none";
populateLibrary();

})
let grid = document.querySelector(".grid-countainer");
function populateLibrary(){
let ktab = document.createElement("div");
ktab.style.background = "white";
ktab.style.height = "300px";
ktab.style.width = "350px"
ktab.style.borderRadius = "14px"
ktab.style.boxShadow = "2px 3px 2px 2px darkgrey";
ktab.style.display = "grid";
ktab.style.gridTemplateRows = "1fr 1fr 1fr 2fr 2fr"
ktab.style.marginBottom = "40px"
grid.appendChild(ktab);

const latestBook = myLibrary[myLibrary.length - 1];

let titlePara = document.createElement("p");
titlePara.textContent = `Title: ${latestBook.title}`;
 titlePara.style.textAlign = "center";
 ktab.appendChild(titlePara);

let authorPara = document.createElement("p");
authorPara.textContent = `Author: ${latestBook.author}`;
authorPara.style.textAlign = "center";
ktab.appendChild(authorPara);

let pagesPara = document.createElement("p");
pagesPara.textContent = `Pages: ${latestBook.pages}`;
pagesPara.style.textAlign = "center";
ktab.appendChild(pagesPara);

let readbtn = document.createElement("button");
if (!latestBook.read) {
    readbtn.textContent = "Not read";
    readbtn.style.backgroundColor = "red";
} else {
    readbtn.textContent = "Read";
    readbtn.style.backgroundColor = "green";
}
readbtn.style.cursor = "pointer";
readbtn.addEventListener("click",()=>{
    if(readbtn.textContent == "Not read"){
        readbtn.textContent = "Read";
        readbtn.style.background = "green"
    } else{
        readbtn.textContent = "Not read"
        readbtn.style.background = "red"
    }
})
ktab.appendChild(readbtn);

let deletebtn = document.createElement("button");
deletebtn.textContent = "DELETE";
deletebtn.style.textAlign = "center";
deletebtn.style.backgroundColor = "#fca5a5"
deletebtn.style.cursor = "pointer"
ktab.appendChild(deletebtn);
deletebtn.addEventListener("click",()=>{
    ktab.remove();
})

}




