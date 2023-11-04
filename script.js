let year=document.querySelector("#selYear");
let bookDisplay=document.querySelector("#books");
let btn=document.querySelector("#searchBtn");
let beforeReqPage=document.querySelector("#beforeReq");
let afterReqPage=document.querySelector("#afterReq");
let backBtn=document.querySelector("#backBtn");
afterReqPage.style.display="none";
btn.addEventListener("click",()=>{
    let selectedYear=year.options[year.selectedIndex].value;
    bookDisplay.innerHTML = ''; // clear the book display
    afterReqPage.style.display="block";
    fetch(`https://ucsbooksapi.onrender.com/books/year/${selectedYear}`)
    .then(res=>res.json())
    .then((data)=>{
        let books=data;
        books.forEach(book=>{
            bookDisplay.innerHTML+=`
            <div class="card book col-12 col-lg-4 m-1">
            <div class="card-body">
            <h4>${book.name}</h4>
            </div>
            <div class="card-body">
            <h5>${book.year}</h5>
            </div>
            <div class="card-footer">
            <a href="${book.url}"  class="btn btn-info">View <i class="fas fa-book-open"></i></a>
            </div>
            </div>
            `
        })
        if(books.length==0){
            bookDisplay.innerHTML="No Books Found"
        }
    })
    beforeReqPage.style.display="none";
})
backBtn.addEventListener("click",()=>{
    beforeReqPage.style.display="block";
    afterReqPage.style.display="none";
})