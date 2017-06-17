
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

//node targets
let content = document.getElementById("content");
let createBtn= document.getElementById("createBtn");
let outputDiv= document.getElementById("output");

let numberArray =[0, 1,2,3,4,5,6,7,8,9,10];

//eventlisteners

createBtn.addEventListener("click", function(){
	let text= getText();
	let cardText = `<div class="card">
		 <img class="card-img-top" src="..." alt="">
		 <div class="card-block">
		    <h4 class="card-title">${text}</h4>
		  </div>
		</div>`;
	//trying to create a div to house the card that will make it easier to delete?
	let parentDiv=document.createElement("div");
	parentDiv.innerHTML= cardText;
	document.body.appendChild(parentDiv);
	//append parentDiv to body of document

	//create delete button
	let deleteBtn = document.createElement("button");
	let deleteText=document.createTextNode("Delete");
	deleteBtn.appendChild(deleteText);
	document.body.appendChild(deleteBtn);
	//event listener for delete button
	deleteBtn.addEventListener("click", function(){
		document.body.removeChild(parentDiv);
		document.body.removeChild(deleteBtn);

	})
})


//functions
function getText(){
	let textContent = content.value;
	return textContent;
}

// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.



//make create button a block level element just for kicks
document.getElementById("createBtn").style.display = "block";