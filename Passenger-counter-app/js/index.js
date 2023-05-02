let count= 0 
let countEl = document.getElementById("count-el")
// console.log(countEl)
let saveEl = document.getElementById("save-el")
console.log(saveEl)


function increment() {
    count += 1 
    countEl.textContent = count
    
}

// increment()

function save() {

    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}