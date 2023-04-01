document.getElementById("add-btn").addEventListener('click', function(){
    const value = document.getElementById("text-input").value;
    const container = document.getElementById("parent-container");
    const li = document.createElement("li");
    li.innerText = value;
    li.classList.add("new-list");
    container.appendChild(li);
    const allList = document.getElementsByClassName("new-list");
    for (const item of allList) {
        item.addEventListener("click", function(e){
            e.target.parentNode.removeChild(e.target);
        })
    }
});

// funtions -------------------------
function setInnerText (id, value) {
    document.getElementById(id).innerText = value;
}

function getInput(id) {
    const value = document.getElementById(id).value;
    return value;
}
// functions ------------------------

document.getElementById("hit-btn").addEventListener('click', function(){
    setInnerText("p-1", "CR7 House");
    setInnerText("p-2", "Thomas Shelby House");
    setInnerText("p-3", "Leonardo House");
    setInnerText("p-4", "Tom Cruise House");
    const inputValue = getInput("text-input");
    console.log(inputValue);
})