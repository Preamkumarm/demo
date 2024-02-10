function Two()
{
    function one(_event)
  {
    var popupoverlay=document.querySelector(".popup-overlay")
    var popupbox=document.querySelector(".popup-box")
    var addpopupbuton=document.getElementById("add-popup-button")
     
    addpopupbuton.addEventListener("click",function(_event){
        popupoverlay.style.display = "block"
        popupbox.style.display = "block"
      })
  }
      return(
        <button className="add-button" id="add-popup-button" onClick={one}>+</button>
      )
}

export default Two