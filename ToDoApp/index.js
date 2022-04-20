const chores = document.getElementById('input-el')
const inputBtn = document.getElementById('btn')
let ulEl = document.getElementById('ul-el')

inputBtn.addEventListener("click", function(){
     let list = document.createElement("li")
     list.innerText = chores.value
     ulEl.appendChild(list)
     chores.value = ""

  list.addEventListener("click", function(){
    let input = document.createElement("input")
    chores.setAttribute("placeholder", "Enter new chore!!!")
    input.setAttribute("type", "text")
    input.setAttribute("value", chores.value) 
    list.innerHTML = input.value
    chores.value = ""
   })
  list.addEventListener("dblclick", function(){
    list.style.textDecoration = "line-through"
  })
  list.addEventListener('click', function (evt) {
    if (evt.detail === 3) {
      ulEl.removeChild(list)
    }
});
})
