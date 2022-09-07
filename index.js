let Myleads = []
// Myleads = JSON.parse(Myleads) // Json.parse(array) -> turn the array string into an array
// Myleads.push("www.epiclead.com") // push a new value to the array
// Myleads=JSON.stringify(Myleads) // Json.stringify(array) turn the array into a string
// console.log(typeof Myleads) // typeof -> the type of the variable or array 
// Myleads=JSON.parse(Myleads)
// Myleads.push("www.facebook.com")
// console.log(Myleads)
// Myleads=JSON.stringify(Myleads)
// console.log(typeof Myleads)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("del-btn")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("Myleads"))
const tabbtn = document.getElementById("tab-btn")
console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage){
    Myleads = leadsFromLocalStorage
    render(Myleads)
}
tabbtn.addEventListener("click",function(){
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // })
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        Myleads.push(tabs[0].url)
        localStorage.setItem("tabs", JSON.stringify(Myleads))
        render(Myleads)
    })
})
function render(leads){
    let listItems=""
    for (let i=0 ; i < leads.length ; i++){
        // let's try a different method
        // 2. add the item to the listItems variable instead of the ulEl.innerHTML
        // listItems += "<li><a target='_blank' href='" + Myleads[i] + "'>" + Myleads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
            `
        // create element
        // set text content
        // append to ul
        // const li = document.createElement("li")
        // li.textContent= Myleads[i]
        // ulEl.append(li)
    }
    // 3. Render the listItems inside the unordered list using ulEL.innerHTML
    ulEl.innerHTML=listItems
    }
// localStorage.setItem("myLeads","www.examplelead.com") // myLeads refers to the key , www.examplelead.com refers to the value
// console.log (localStorage.getItem("myLeads"))
// example of LocalStorage {
// localStorage.setItem("myLeads","Mohamed")
// localStorage.getItem("myLeads")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()
// }
// Myleads.push("www.awesomelead.com")
// console.log(Myleads)
// push the value from the inputEl into the myLeads array
// instead of the hard coded "www.awesomeleads.com" value
// Google -> "get value from input field javascript"
deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    Myleads = []
    ulEl.innerHTML="" // render(Myleads) 
})
inputBtn.addEventListener("click", function(){
    Myleads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("Myleads",JSON.stringify(Myleads))
    render(Myleads)
    console.log(localStorage.getItem("Myleads"))
})
// log out the items in the Myleads array using afor loop
// Render the leads in the unordered list using ulEl.textcontent
// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with