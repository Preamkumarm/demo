import "./App.css"

function App()
{
  
   function step(_event)
   {
    var popupoverlay=document.querySelector(".popup-overlay")
    var popupbox=document.querySelector(".popup-box")
    var container=document.querySelector(".container")
    var booktitleinput=document.getElementById("book-title-input")
    var bookauthorinput=document.getElementById("book-author-input")
    var bookdescriptioninput=document.getElementById("book-description-input")
    var addbook=document.getElementById("add-book")

    addbook.addEventListener("click",(_event) => {
        var div=document.createElement("div")
        div.setAttribute("class", "book-container")
        div.innerHTML = `<h2>${booktitleinput.value}</h2>
      <h5> ${bookauthorinput.value}</h5>
      <p>${bookdescriptioninput.value}</p>
      <button onClick="deletebook(event)" class="btn">Delete</button>`
        container.append(div)
        popupoverlay.style.display = "none"
        popupbox.style.display = "none"
      })

   }

   
   function deletebook(event)
   {
    event.target.parentElement.remove()
   }

  return(<div>
    <div>
         <h1 className="navbar">Booksky</h1> 
    </div>
    <div className="container">
      <div className="book-container">
        <h2>Rich Dad Poor Dad</h2>
        <h5>Robert</h5>
        <p>Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy (financial education), financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence (financial IQ).

Rich Dad Poor Dad is written in the style of a set of parables based on Kiyosaki's life. The titular "rich dad" is his best friend's father who accumulated wealth due to entrepreneurship and savvy investing, while the "poor dad" is claimed to be Kiyosaki's own father who he says worked hard all his life but never obtained financial security.</p>
        <button onClick={deletebook}>Delete</button>
      </div>
    </div>

    <div className="popup-overlay"></div>
    <div className="popup-box">
      <h2>Add Book</h2>
      <form>
        <input type="text" placeholder="Book-title" id="book-title-input"></input>
        <input type="text" placeholder="Book-author" id="book-author-input"></input>
        <textarea placeholder="Short Description" id="book-description-input"></textarea>
        <button id="add-book" onClick={step}>Add</button>
        <button id="cancel-popup">Cancel</button>
      </form>
    </div>
    
      

</div>)
}

export default App