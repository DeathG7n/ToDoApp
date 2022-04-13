const chores = document.getElementById('input-el')
const inputBtn = document.getElementById('btn')
let ulEl = document.getElementById('ul-el')


inputBtn.addEventListener("click", function(){
     let list = document.createElement("li")
     list.innerText = chores.value
     ulEl.appendChild(list)
     chores.value = ""

  list.addEventListener("click", function(){
    list.style.textDecoration = "line-through"
  })
  list.addEventListener("dblclick", function(){
    ulEl.removeChild(list)
  })
  
})
