
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

//version 2- store information for each card in an object stored in an array of card objects like in group projects-- can use that + for loop to iterate through that array and plug in relevant information below, except that the user here chooses what text is printed on the card.

//node targets
let content = document.getElementById("content");
let createBtn= document.getElementById("createBtn");
let outputDiv= document.getElementById("output");

//sample picture for cards
let thinker="images/thinker.jpg";

//eventlisteners

let cardText="";
createBtn.addEventListener("click", function(){
	let text= getText();

	cardText = `<div class="card">
		 <img class="card-img-top" src= ${thinker} alt="statue of Roman girl thinking">
		 <div class="card-block">
		    <h4 class="card-title">${text}</h4>
		  </div>
		</div>`;
	//code for card used from the bootstrap example for cards under "getting started"

	//trying to create a div to house the card that will make it easier to delete?
	let parentDiv=document.createElement("div");
	parentDiv.innerHTML= cardText;
	document.body.appendChild(parentDiv);
	//append parentDiv to body of document

	//create delete button with text inside
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
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

//functions
function getText(){
	let textContent = content.value;
	return textContent;
}

//make create button a block level element just for kicks
document.getElementById("createBtn").style.display = "block";