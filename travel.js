let createRoombtn = document.querySelector("#createRoombtn");
const container = document.querySelector(".card-container");
//title is index 0, location 1, destination 2, other info 3
let inputboxes = document.querySelectorAll("input.box");
let inputinfo = {
	title: "",
	location: "",
	destination: "",
	info: ""
}

console.log(inputboxes);

createRoombtn.addEventListener("click", (e)=>{
	inputinfo.title = inputboxes[0].value;
	inputinfo.location = inputboxes[1].value;
	inputinfo.destination = inputboxes[2].value;
	inputinfo.info = inputboxes[3].value;

	if(inputinfo.title == "" || inputinfo.location=="" || inputinfo.destination==""){
		alert("Please fill in all the neccessary information to create a Room.");
	}

	else{
		createRoom(container, inputinfo);

		inputboxes[0].value = "";
		inputboxes[1].value = "";
		inputboxes[2].value = "";
		inputboxes[3].value = "";

		alert("Successfully created a Room!");
	}

});

function createRoom(container, info) {
	let cardstring = `
 		<div style="padding: 20px">
		<div class="card" style="width: 27rem; padding: 20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.2);">
			<img class="card-img-top" src="map.jpg" alt="Card image cap">
			<div class="card-body">
				<h5 class="card-title">${info.title} </h5>
				<p class="card-text">
					From: ${info.location} <br>
		 			To: ${info.destination} <br>
					${info.info}
				</p>
				<a href="#" class="btn btn-outline-warning joinbtn">Join Group</a>
			</div>
		</div>
		</div>
 
 `;
	container.innerHTML += cardstring;
  //add new card to cardcontainer
}

function generatePassword() {
  let password = ""; 
  for (let i=0; i<6; i++) 
    password += String.fromCharCode(Math.floor(Math.random()*63+33));
  return password; 
}

const join = document.querySelectorAll(".joinbtn"); 
join.forEach((joinbtn)=>{
	console.log(join);
	joinbtn.addEventListener('click', () => {
		let pass = generatePassword();
  alert(`Here is the Room Password. Use this to communicate with your travel buddies safely! Password: ${pass}`);
})
});


//return format might be diff depending on where we use it 
