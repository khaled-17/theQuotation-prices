// function addProduct() {
//     var table = document.querySelector("table");
//     var newRow = table.insertRow(table.rows.length);

//     var sn = newRow.insertCell(0);
//     var code = newRow.insertCell(1);
//     var w = newRow.insertCell(2);
//     var h = newRow.insertCell(3);
//     var q = newRow.insertCell(4);
//     var area = newRow.insertCell(5);
//     var totae = newRow.insertCell(6);
//     var pm = newRow.insertCell(7);
//     var tot = newRow.insertCell(8);

//     sn.innerHTML = document.getElementById("sn").value;
//     code.innerHTML = document.getElementById("code").value;
//     w.innerHTML = document.getElementById("w").value;
//     h.innerHTML = document.getElementById("h").value;
//     q.innerHTML = document.getElementById("q").value;
//     area.innerHTML = document.getElementById("area").value;
//     totae.innerHTML = document.getElementById("totae").value;
//     pm.innerHTML = document.getElementById("pm").value;
//     tot.innerHTML = document.getElementById("tot").value;

//     document.getElementById("productForm").reset();
// }



const inputElement = document.getElementById("sn");
const inputValue = inputElement.value;

// طباعة القيمة في الكونسول
// const elEsn = document.getElementById("sn").value;
// const elEcode = document.getElementById("code").value;
// const elEw = document.getElementById("w").value;
// const elEh = document.getElementById("h").value;
// const elEq = document.getElementById("q").value;
// const elEarea = document.getElementById("area").value;
// const elEtotae = document.getElementById("totae").value;
// const elEpm = document.getElementById("pm").value;
// const elEtot = document.getElementById("tot").value;
// document.getElementById("productForm").reset();


const productForm=document.getElementById('productForm')

productForm.addEventListener("submit",function (e) {
    e.preventDefault()
    console.log("dd");

    const id = new Date().getTime().toString();

    
    
    const element = document.createElement("tr")
    
    const attr = document.createAttribute("data-id")
    attr.value = id
    element.setAttributeNode(attr)
    

    const elEsn = document.getElementById("sn").value;
    const elEcode = document.getElementById("code").value;
    const elEw = document.getElementById("w").value;
    const elEh = document.getElementById("h").value;
    const elEq = document.getElementById("q").value;
    const elEarea = document.getElementById("area").value;
    const elEtotae = document.getElementById("totae").value;
    const elEpm = document.getElementById("pm").value;
    const elEtot = document.getElementById("tot").value;

if (elEsn&&elEcode&&elEw&&elEh&&elEq&&elEarea&&elEtotae&&elEpm&&elEtot) {

    element.innerHTML = `      
    <th>${elEsn}</th>
    <th>${elEcode}</th>
    <th>${elEw}</th>
    <th>${elEh}</th>
    <th>${elEq}</th>
    <th>${elEarea}</th>
    <th>${elEtotae}</th>
    <th>${elEpm}</th>
    <th>${elEtot}</th>
 
`
const list = document.querySelector('.GeneratedTable')

list.appendChild(element)


    
}else{

alert("يجب اضافه جميع بيانات عرض السعار")


}


  
        document.getElementById("productForm").reset();
})






function printFormattedDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // يجب إضافة واحد لأن شهر يبدأ من 0 (يناير).
    const year = today.getFullYear();

    // قم بإضافة الصفر إلى اليوم والشهر إذا كانوا أقل من 10.
    const formattedDay = (day < 10) ? '0' + day : day;
    const formattedMonth = (month < 10) ? '0' + month : month;

    const formattedDate = formattedDay + '/' + formattedMonth + '/' + year;
 
    document.querySelector('.timeoftoday').innerHTML=formattedDate
}

// استدعاء الدالة لطباعة التاريخ بالصيغة المطلوبة.
printFormattedDate();
