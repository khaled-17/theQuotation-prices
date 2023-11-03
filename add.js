// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')

const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')


// edit option
let editelement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem)
clearBtn.addEventListener("click", clearBtnfun)



// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    // console.log();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag) {
       
       
       
        creatListIem(id,value)

       
       
       
       
        //display alert
        displayAlert("item added to the list ", "success")

        addToLocalStorage(id, value);


        setBackToDefault();


    } else if (value && editFlag) {
        console.log("editing");
        editelement.innerHTML = value;
        displayAlert('editing is done ', 'success')

        editlocalStorage(editId, value)
        setBackToDefault()



    } else {

        displayAlert('empty value', 'danger')
    }
}


//display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)
}

//clear item 
function clearBtnfun() {
    const items = document.querySelectorAll('.grocery-item')
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        })
    }

    displayAlert("empty list", "danger")
    setBackToDefault()
    localStorage.removeItem("list")



}

//set back to defult 
function setBackToDefault() {

    grocery.value = '';
    editFlag = false;
    editId = "";
    submitBtn.textContent = "submit";
    console.log('set back to defult ');
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    console.log('add to localStorage');
    const grocery = { id, value };
let item=getlocalstorage()
item.push(grocery)
localStorage.setItem('list',JSON.stringify(item))
    console.log(grocery);
}


function removefromlocalstorge(id) { 
   
     let items=getlocalstorage();

     items=items.filter(function (item) {
        if (item.id!=id) {
            return item
        }})
        localStorage.setItem('list',JSON.stringify(items))



}
function editlocalStorage(id, value) { 
let items=getlocalstorage();
items=items.map(function (item) {
    if (item.id===id) {
        item.value=value;
    }
    return item;
})

localStorage.setItem('list',JSON.stringify(items))

}


function getlocalstorage(  ) {
    let item=localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
return item
}








//********* edit function */
function edititem(e) {
    console.log('edeit ');
    const element = e.currentTarget.parentElement.parentElement;
    //set edit item 
    editelement = e.currentTarget.parentElement.previousElementSibling;

    //set form value 
    grocery.value = editelement.innerHTML
    editFlag = true;
    editId = element.dataset.id
    submitBtn.textContent = "edit"

}
//********* delete function */
function deleteitem(e) {
    console.log('detit ');
    // console.log();
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id

    list.removeChild(element)
    displayAlert(" item removed", "danger")
    setBackToDefault()

    //remove from local storge 
    removefromlocalstorge(id)
}




 
// ****** SETUP ITEMS **********


// load items from localStorage
window.addEventListener('DOMContentLoaded',function () {
        let items=getlocalstorage();

        // creatListIem(id,value)
items.forEach(function (item) {

    creatListIem(item.id,item.value)

})





})



function creatListIem(id,value) {
    const element = document.createElement("article")
    //add class
    element.classList.add("grocery-item");
    // add id
    const attr = document.createAttribute("data-id")
    attr.value = id
    element.setAttributeNode(attr)

    element.innerHTML = `  <p class="title">${value}</p>
<div class="btn-container">
<button class="edit-btn" type="button"><i class="fas fa-edit"></i></button>
<button class="delete-btn" type="button"><i class="fas fa-trash"></i></button>
</div> `

    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
                    deleteBtn.addEventListener('click', deleteitem)
                    editBtn.addEventListener('click', edititem)

    list.appendChild(element)

    
}