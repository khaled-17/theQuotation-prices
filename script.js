// script.js 

// Taking elements from HTML 
const inputField = document.querySelector(".inputField"); 
const resumeBuilder = document.querySelector(".resume-builder"); 
 const outputContainer = document.querySelector(".output_container"); 

const GenerateEditBTN=document.querySelector('.GenerateEditBTN')
const PrintBtn =document.querySelector('.PrintBtn')


console.log(inputField);
let isHidden = true; 

// Function to toggle between input form and resume preview 
function hide() { 
	if (isHidden) { 
	
		// Hide the input form and show the resume preview 
		resumeBuilder.style.display = "none"; 
		PrintBtn.style.display = "none"; 
		isHidden = false; 

		outputContainer.style.display = "block";
        GenerateEditBTN.textContent="Edit" 
        PrintBtn.style.display = "block"; 

		// outputContainer.innerHTML = ` `; 
	} else { 
		// Show the input form and hide the resume preview 
		resumeBuilder.style.display = "block"; 
		isHidden = true; 

        GenerateEditBTN.textContent="Generate" 
		PrintBtn.style.display = "none"; 

		// outputContainer.style.display = "none"; 
		// outputContainer.innerHTML = ""; 
	} 
}


 const addcastumer  =document.querySelector('.addcastumer')

 // العثور على العناصر <span> باستخدام معرفاتها
const nameSpan = document.getElementById("nameSpan");
const subjectSpan = document.getElementById("subjectSpan");


addcastumer.addEventListener('click',function (params) {

 		// استخدم getElementByName للوصول إلى عناصر النموذج بواسطة اسمها
		const nameInput = document.getElementsByName("name")[0];
		const aboutInput = document.getElementsByName("about")[0];
	
		
		console.log(nameSpan);

		// احصل على قيم الحقول
		const nameValue = nameInput.value;
		const aboutValue = aboutInput.value;
	if (nameValue&&aboutValue) {
		
		 
nameSpan.textContent = nameValue;
subjectSpan.textContent = aboutValue;

	} else {
		
alert('أضف الاسم و المضوع من فضلك ')	}
		

})










 


