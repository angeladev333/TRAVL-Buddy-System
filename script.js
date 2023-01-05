let loginBtn = document.querySelector("#login");

loginBtn.addEventListener("click", (e) => {
  window.location.href = "login.html";
});

const createBtn = document.getElementById("createbtn");
const validTime = document.getElementById("event-card-body");
let redo = document.getElementById("validate"); 

// createBtn.addEventListener('click', () => {
// 	let timePicker = document.getElementById("time"); 
// 	const arr = timePicker.value.split(":"); 
//   if (parseInt(arr[0])>=0 && parseInt(arr[0])< 24 && parseInt(arr[1])>=0 && parseInt(arr[1])<=59) 
//     validTime.innerHTML = 
//       `<p>At ${timePicker.value} at X building, you will leave.</p>`
//   else 
//     redo.innerHTML = "Please re-insert a valid time between 0:00 and 23:59"; 
// })
                                    