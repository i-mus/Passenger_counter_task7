


let countEl = document.getElementById('counter')
let count = 0
function incr(){
    count = count + 1
    countEl.innerText = count
}


let saveEl = document.getElementById('saveEl')
function save(){
    let currentCount = " " + count + " - "
    saveEl.textContent += currentCount
    console.log(count)
    countEl.innerHTML= 0
    count = 0
}