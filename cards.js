
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

//node targets
let content = document.getElementById("content");
let createBtn= document.getElementById("createBtn");
let outputDiv= document.getElementById("output");

//eventlisteners

createBtn.addEventListener("click", function(){
	let text= getText();
	let cardText = `<div class="card" style="width: 30%; height:auto;">
		 <img class="card-img-top" src="..." alt="Card image cap">
		 <div class="card-block">
		    <h4 class="card-title">${text}</h4>
		  </div>
		</div>`;

	let parentDiv=document.createElement("div");
	parentDiv.innerHTML= cardText;
	document.body.appendChild(parentDiv);
	//append parentDiv to body of document


})

//functions
function getText(){
	let textContent = content.value;
	return textContent;
}

// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.



//make create button a block level element just for kicks
document.getElementById("createBtn").style.display = "block";